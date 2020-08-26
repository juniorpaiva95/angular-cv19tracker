import { Component, Input, HostBinding, OnInit } from "@angular/core";

@Component({
    selector: 'cv-card',
    templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

    // @HostBinding('class') 
    @Input('class') classList: string = '';


    ngOnInit() {
        this.resolveClass();
    }

    resolveClass() {
        return 'cv-card--' + this.classList;
    }

}