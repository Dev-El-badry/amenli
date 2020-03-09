import { Injectable } from '@angular/core';

@Injectable()
export class CollbrationsService {
    collbrations = [
        'assets/images/1.png',
        'assets/images/2.png',
        'assets/images/3.png',
        'assets/images/1.png',
        'assets/images/2.png'
    ]
    constructor() {}

    get Collbrations() {
        return [...this.collbrations];
    }
}