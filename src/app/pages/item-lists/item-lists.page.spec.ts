import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemListsPage } from './item-lists.page';

describe('ItemListsPage', () => {
  let component: ItemListsPage;
  let fixture: ComponentFixture<ItemListsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
