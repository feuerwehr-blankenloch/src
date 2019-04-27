import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  oowerinhandler(text: string){
    console.log("Add : "+text);
    document.getElementById("growadd").innerHTML = text;
    //alert(text);
}

}
