import { Component, OnInit } from '@angular/core';

import { UserblockService } from './userblock.service';
import { DataService } from '../../../shared/service/data.service';

@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    user: any;
    constructor(public userblockService: UserblockService,public dataService:DataService) {

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

}
