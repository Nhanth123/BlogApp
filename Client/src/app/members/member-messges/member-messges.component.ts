import { NgForm } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-messges',
  templateUrl: './member-messges.component.html',
  styleUrls: ['./member-messges.component.css']
})
export class MemberMessgesComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() messages: Message[] = [];
  @Input() username: string;
  messageContent: string;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

}
  sendMessage() {
    this.messageService.sendMessage(this.username, this.messageContent)
    .subscribe(message => {
      this.messages.push(message);
      this.messageForm.reset();
    });
  }

}
