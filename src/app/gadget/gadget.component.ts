import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gadget',
  templateUrl: './gadget.component.html',
  styleUrls: ['./gadget.component.css']
})
export class GadgetComponent implements OnInit {
  title = 'Gadgets / Smartphones';

  constructor() { }

  ngOnInit(): void {
  }

}
