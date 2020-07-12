import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  btnEnable: boolean = true;
  selectEnable: boolean = false;
  spinnerMode: string = "determinate"
  i: number = 0;
  inputName: string = "Raphael"

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log("salvando");
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 1000);
  }

  cancel() {
    console.log("cancelando");
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 1000);
  }

  cbChange(event){
    this.selectEnable = event.checked
  }

  inputEvent(event){
    this.inputName = event.target.value    
  }


}
