import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemListsPageRoutingModule } from './item-lists-routing.module';

import { ItemListsPage } from './item-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemListsPageRoutingModule
  ],
  declarations: [ItemListsPage]
})
export class ItemListsPageModule {}
