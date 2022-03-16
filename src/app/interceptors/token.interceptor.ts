import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    public loading;

    constructor(
        public loadingController: LoadingController,
        public toastController: ToastController,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // this.presentLoading("Please wait...");

        const obj = JSON.parse(localStorage.getItem('apotek-users'));
        const noerror = localStorage.getItem('noerror');

        const token = (obj) ? obj.access_token : null;

        if (token) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
        } else {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                    Accept: 'application/json'
                }
            });
        }

        return next.handle(request).pipe(
            finalize(() => {
                // setTimeout(() => { this.dismissLoading(); }, 1000);
            }),
            catchError((error: HttpErrorResponse) => {
                // setTimeout(() => { this.dismissLoading(); }, 1000);
                if( parseInt(noerror) == 1 ) return throwError(error);
                if (error.status === 422) {
                    this.handleError(error);
                } else {
                    this.presentToast(error.error.message);
                }
                return throwError(error);
            }));
    }

    async presentToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 5000,
            position: 'bottom',
            color: 'danger'
        });
        toast.present();
    }

    async presentLoading(msg) {
        this.loading = await this.loadingController.create({ message: msg });

        this.loading.present();
    }

    async dismissLoading() {
        if(this.loading == undefined) return;
        await this.loading.dismiss();
    }

    handleError(error) {
        try {
            this.presentToast(error.error.errors.email[0]);
        }
        catch (err) {
            try {
                this.presentToast(error.error.errors.password[0]);
            }
            catch (err) {
                try {
                    this.presentToast(error.error.errors.old_password[0]);
                }
                catch (err) {
                    this.presentToast(error.error.message);
                }
            }
        }
    }

}