import { PresenceService } from './../../_services/presence.service';
import { MembersService } from 'src/app/_services/members.service';
import { Member } from './../../_models/member';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member;
  constructor(private memberService: MembersService,
              private toastr: ToastrService,
              public presence: PresenceService) { }

  ngOnInit(): void {
  }

  addLike(member: Member){
    this.memberService.addLike(member.username).subscribe(() => {
      this.toastr.success('You have liked ' + member.knownAs);
    });
  }
}
