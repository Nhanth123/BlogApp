import { MembersService } from 'src/app/_services/members.service';
import { Injectable } from '@angular/core';
import { Member } from './../_models/member';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MemberDetailedResolver implements Resolve<Member> {
    constructor(private memberService: MembersService) {

    }
    resolve(route: ActivatedRouteSnapshot): Observable<Member> {
        return this.memberService.getMember(route.paramMap.get('username'));
    }
}
