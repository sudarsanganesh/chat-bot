import { Component, HostListener, ViewEncapsulation, Input, Output, EventEmitter, ElementRef, ViewChild, OnInit } from '@angular/core';
import { createElement } from '@angular/core/src/view/element';
export enum keyCode {
  enter = 13,
}

@Component({
  selector: 'chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChatBotComponent {

  p: number;  
  r: number;
  n: number;
  emi: number;
  interest;
  dividend;
  divider;
  grandTotal;
  @Output() outputData = new EventEmitter();
  isShow=false;
  message: string[] = [];
  reply: string[] = ['Hello! How can i help you', 'Home Loan or Personal Loan or car loan?',]
  red = true;
  mesg: string;
  
  
  
  /* calculate EMI */

  getCal() {

    this.interest = this.r / 12 / 100
    this.dividend = this.p * this.interest * Math.pow((1 + this.interest), this.n)
    this.divider = Math.pow((1 + this.interest), this.n) - 1;
    this.emi = Math.round(this.dividend / this.divider);
    this.interest = Math.round((this.emi * this.n) - this.p);
    this.grandTotal = Math.round(this.emi * this.n);
    this.outputData.emit(this.emi + " " + this.interest + " " + this.grandTotal);
  }


  /* Message events */

 insert() {
   
    if (this.mesg == "") {
    } else {
      if (this.mesg == "hi") {
        this.message.unshift(this.mesg);
        this.message.unshift(this.reply[0]);
        this.mesg = "";
      } else if(this.mesg == "loan"){
        this.message.unshift(this.mesg);
        this.message.unshift(this.reply[1]);
        this.mesg = "";
      }
      else if(this.mesg == "RD" || this.mesg == "rd" || this.mesg == "Recurring Deposit"){
        this.message.unshift(this.mesg);
        this.message.unshift(this.reply[2]);
        this.mesg = "";
      }
      else if(this.mesg == "FD" || this.mesg == "fd" || this.mesg == "Fixed Deposit"){
        this.message.unshift(this.mesg);
        this.message.unshift(this.reply[3]);
        this.mesg = "";
      }            
      else {
        this.message.unshift("click the chat to get the list of queries");
        this.mesg = "";
      }
       
    }
  }

  sendMessage() {
    this.insert();
  }

  /* triggering calculater */
  triggerCal() {
    this.isShow = !this.isShow;
  } /* triggercal close */


  @HostListener('window:keyup', ['$event'])
  KeyEvent(event: KeyboardEvent) {
    if (event.keyCode == keyCode.enter) {
      this.insert();
    }
  } /* hostlistner close */

}
