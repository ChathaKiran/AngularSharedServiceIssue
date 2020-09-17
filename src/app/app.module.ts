import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ListItemsComponent } from './list-items/list-items.component';

@NgModule({
  declarations: [AppComponent, ListItemComponent, ListItemsComponent], 
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule], 
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { 
} 
