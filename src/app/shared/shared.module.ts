import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ThemeService } from './services/theme.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [
        SidebarComponent,
        FooterComponent,
        CardComponent
    ],
    imports: [
        HttpClientModule
    ],
    exports: [
        SidebarComponent,
        FooterComponent,
        CardComponent
    ],
    providers: [
        ThemeService
    ]
})
export class SharedModule {}