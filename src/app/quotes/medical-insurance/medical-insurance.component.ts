import { TranslateConfigService } from './../../shared/translate-config.service';
import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../shared/quotes.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-medical-insurance',
  templateUrl: './medical-insurance.component.html',
  styleUrls: ['./medical-insurance.component.css']
})
export class MedicalInsuranceComponent implements OnInit {
  ages;
  gender;
  works;
  form: FormGroup;
  data = {
    age: 0,
    gender: 0,
    work: 0
  };
  constructor(private quoteService: QuotesService, private translate: TranslateConfigService) { }

  ngOnInit() {
    this.createMedicalForm();
    this.ages = this.quoteService.getAges();
    this.gender = this.quoteService.getGender();
    this.works = this.quoteService.getWorks();
    localStorage.removeItem('medical');
  }
  createMedicalForm() {
    this.form =  new FormGroup({
      age: new FormControl(0, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      gender: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      work: new FormControl(0, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }
  submitFormAuto(value: any, type: 'age' | 'gender' | 'work') {
    if (type === 'age') {
      this.data.age = value;
    }

    if (type === 'gender') {
      this.data.gender = parseInt(value);
    }

    if (type === 'work') {
      this.data.work = value;
    }

    if ((this.data.age != null) && (this.data.gender != null) &&  (this.data.work != null)) {
      localStorage.setItem('medical', 'medical');
      console.log(this.data);
      this.quoteService.getDataList({dob: this.data.age});
    }
  }

}
