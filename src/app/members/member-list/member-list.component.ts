import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/_services/members.service';
import { Member } from '../../_models/member';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[];

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(){
    this.memberService.getMembers().subscribe(memebers => {
      this.members = memebers;
    })
  }

}
