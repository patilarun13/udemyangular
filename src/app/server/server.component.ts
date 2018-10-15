import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  enableServerAddButton = false;
  serverAddStatus = 'Server not yet added';
  constructor() {

    setTimeout(() => {
      this.enableServerAddButton = true;
    }, 1000);
  }

  onServerAddClick() {
    this.serverAddStatus = 'Server added successfully';
  }

  ngOnInit() {
  }

}
