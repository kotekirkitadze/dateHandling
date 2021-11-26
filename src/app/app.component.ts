import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  bsValue: Date;
  text: string = '';

  handleKeyUp(e) {
    if (e.key == 'Backspace') {
      this.text = this.text.substring(0, this.text.length - 1);
      console.log(this.text)
    } else {
      this.text += e.key
      if (this.text.length > 9) {
        this.handleDate(this.text)
      }
    }
  }

  handleDate(a: string) {
    this.bsValue = new Date();
    const date = a.split('.');
    this.bsValue.setDate(Number(date[0]))
    this.bsValue.setMonth(+date[1] - 1)
    this.bsValue.setFullYear(+date[2])
    this.text = ''
    this.otherTransform()
  }


  otherTransform() {
    console.log(this.bsValue.getDate())
    let date
    if ((this.bsValue.getDate() + '').length == 1) {
      date = `0${this.bsValue.getDate()}/${this.bsValue.getMonth()}/${this.bsValue.getFullYear()}`;
    } else {
      date = `${this.bsValue.getDate()}/${this.bsValue.getMonth()}/${this.bsValue.getFullYear()}`;
    }
    this.handleFormat(date);
  }

  handleFormat(date: string) {
    let monTh = date.split('/');
    const m = months[`0${monTh[1]}`];
    const finalResult = `${monTh[0]}.${m}.${monTh[2]}`
    console.log(finalResult)
  }

}

enum months {
  '00' = 'Jan',
  '01' = 'Feb',
  '02' = 'Mar',
  '03' = 'Apr',
  '04' = 'May',
  '05' = 'Jun',
  '06' = 'Jul',
  '07' = 'Aug',
  '08' = 'Sep',
  '09' = 'Oct',
  '010' = 'Nov',
  '011' = 'Dec'
}
