import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todoTask = '';
  tasks = [];

  constructor() {}

  ngOnInit() {
  }

  onCheckAll() {
    return false;
  }

  onAddNewItem() {
    this.tasks.push(this.todoTask);
  }

  onUpdateItem(event) {
    this.todoTask = (<HTMLInputElement>event.target).value;
  }

}
