import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ThemeService {
    // isThemeDark: boolean = false;

    private isThemeDark = new BehaviorSubject<boolean>(false);
    isExpandChanges: Observable<boolean> = this.isThemeDark.asObservable();
}