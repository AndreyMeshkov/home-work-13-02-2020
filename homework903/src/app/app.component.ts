import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  regionCity: any;

  ngOnInit() {
  this.form = new FormGroup({
    country: new FormControl('Республика Беларусь'),
    address: new FormGroup({
      region: new FormControl('', Validators.required),
      city: new FormGroup({
        nameCity: new FormControl('', Validators.required)
      })
    }),
    street: new FormControl(null, Validators.required),
    house: new FormControl(null, Validators.required),
    apartment: new FormControl(null),
    postal: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{6}')])
  });
}

  submit() {
    console.log('Form:', this.form);
    const formData = {...this.form.value};

    console.log('FormData', formData);
  }

  setCity() {
    const cityMap = {
      minsk: 'Минск', //, 'Солигорск', 'Борисов'],
      grodno: 'Гродно',//, 'Лида', 'Мосты'],
      brest: 'Брест',//, 'Барановичи', 'Пинск'],
      mogilev: 'Могилёв',//, 'Бобруйск', 'Кричев'],
      gomel: 'Гомель',//, 'Мозырь', 'Жлобин'],
      vitebsk: 'Витебск'//, 'Орша', 'Полоцк']
    };
    const cityKey = this.form.get('address').get('region').value;
    const regionCity = cityMap[cityKey];

    console.log(regionCity);
    this.form.patchValue({
      address: {region: regionCity}
    });
  }
}
