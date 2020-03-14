import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  regionCity: string;
  regionCity1: string;

  ngOnInit() {
  this.form = new FormGroup({
    country: new FormControl('Республика Беларусь'),
    region: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
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

}
