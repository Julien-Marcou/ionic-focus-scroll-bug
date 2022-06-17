import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  ionViewDidEnter() {
    document.body.classList.add('fix-ionic');
  }

  ionViewDidLeave() {
    document.body.classList.remove('fix-ionic');
  }

}
