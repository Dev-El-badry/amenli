import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class InsuranceService {
    private _service: any[];
    page: string;
    result;
    constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.translate.get('services').subscribe(service => {
            this._service = [
                {
                    image: 'assets/images/service/',
                    title: service.service1,
                    tag: 'general-accidents'
                },
                {
                    image: 'assets/images/service/',
                    title: service.service2,
                    tag: 'medical-insurance'
                },
                {
                    image: 'assets/images/service/',
                    title: service.service3,
                    tag: 'travel-insurance'
                },
                {
                    image: 'assets/images/service/',
                    title: service.service4,
                    tag: 'marine-insurance'
                },
                {
                    image: 'assets/images/service/',
                    title: service.service5,
                    tag: 'motor-insurance'
                },
                {
                    image: 'assets/images/service/',
                    title: service.service6,
                    tag: 'engineering-insurance'
                },
                {
                    image: 'assets/images/service/',
                    title: service.service7,
                    tag: 'property-insurance'
                }
            ];

           
        });
    }

    get service() {return [...this._service]};

    getServiceByTag(tag) {
        if(this._service) 
            return { ...this._service.find(ele => ele.tag === tag) };
    }
}