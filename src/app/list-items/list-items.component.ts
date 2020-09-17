import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  _localListItems: string[];
  listItemsSubscription: any;
  listItemSubscription: any;

  constructor(private appService: AppService){

  }

  ngOnInit(){
    this.listItemsSubscription = this.appService.listItemsObservable.subscribe(_listItems => {
      this._localListItems = _listItems;
    });

    this.listItemSubscription = this.appService.listItemObservable.subscribe(_listItem => {
      if (_listItem != undefined) {
        var allItems = this._localListItems.concat(_listItem);
        this.appService.updateListItems(allItems);
      }
    });
  }

  ngOnDestroy() {
    this.listItemsSubscription.unsubscribe();
    this.listItemSubscription.unsubscribe();
  }  
}
