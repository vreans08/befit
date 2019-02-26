import { Component, OnInit } from '@angular/core';

import { UserblockService } from './userblock.service';
import { DataService } from '../../../shared/service/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    user: any;
    constructor(public userblockService: UserblockService,public dataService:DataService,public router:Router) {

    }

    ngOnInit() {
        this.dataService.loginData.subscribe(data => {
            if(data)
            {
                this.user = data;
            }
        })
    }

    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

    logout(){
        sessionStorage.removeItem('loginData');
        sessionStorage.removeItem('mytree');
        this.router.navigate(['/login'])
    }
}
