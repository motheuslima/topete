import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'topete';

  page = 1;

  finalPage = 4;
  firstPage = 1;

  language = 'en';

  constructor(
    public translate: TranslateService
  ){
    // Register translation languages
    translate.addLangs(['en', 'pt']);
    // Set default language
    translate.setDefaultLang('en');
  }

  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

  right() {
    if (this.page == this.finalPage)
      return

    this.page += 1;
  }

  left() {
    if (this.page == this.firstPage)
      return

    this.page -= 1;
  }
}
