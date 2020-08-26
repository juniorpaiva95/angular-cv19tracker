import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ThemeService {
    // isThemeDark: boolean = false;

    private isThemeDark = new BehaviorSubject<boolean>(false);
    isThemeDark$: Observable<boolean> = this.isThemeDark.asObservable();

    toggleTheme(isDark: boolean): void {
        this.isThemeDark.next(isDark);
    }
}