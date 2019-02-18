import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor(public dataService: DataService) { }

    ngOnInit() {
        let data = sessionStorage.getItem('loginData');
        data = JSON.parse(data);
        this.dataService.setLoginData(data);
    }

}
