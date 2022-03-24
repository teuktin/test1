import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListsPage } from './item-lists.page';

const routes: Routes = [
  {
    path: '',
    component: ItemListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemListsPageRoutingModule {}
