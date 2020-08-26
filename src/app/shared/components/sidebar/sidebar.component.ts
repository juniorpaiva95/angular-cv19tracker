import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'cv-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

    isDark: boolean;
    
    constructor(private themeService: ThemeService) { }

    ngOnInit () {
        this.themeService.isThemeDark$.subscribe(isDark => this.isDark = isDark);
    }

    toggleTheme() {
        this.themeService.toggleTheme(!this.isDark);
    }
}