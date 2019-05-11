import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: 'title.component.html',
    styleUrls: ['title.component.scss']
})

export class TitleComponent implements OnInit {
    public name : string = 'Manuel Uso';
    public edad : number;
    public edades : number[];

    public css_classes : string[] =  ['active','shadow'];

    public isAvailable : boolean = true;

    constructor() {

    }

    ngOnInit() {
        this.name = 'Manuel';
        this.edad = 33;

        setTimeout( () => this.name = 'Manuel Enrique', 3000 );
        setTimeout( () => this.isAvailable = false, 3000 );
        setTimeout( () => this.css_classes = ['shadow'], 3000 );
    }

    getEdadNombre() : string {
        return `${this.name} : ${this.edad}`;
    }
}