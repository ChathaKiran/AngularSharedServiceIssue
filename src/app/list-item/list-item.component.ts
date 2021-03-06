import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  listItemName: string;

  constructor(private maintenanceWindowService: AppService, private router: Router) { }

  ngOnInit() {

  }

  btnAddListItem(){
    this.maintenanceWindowService.updateListItem(this.listItemName);

    this.router.navigate(['list-items']);
    
  }
}
