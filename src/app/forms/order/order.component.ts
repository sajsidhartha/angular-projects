import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  

  ngOnInit(): void {
  }
  notificationForm: FormGroup;
  notifyBackAlertOptions = [
    { name: 'Option 1', value: '1' },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
    { name: 'Option 4', value: '4' }
  ];
  discontinuedAlertOptions = [
    { name: 'Yes for any', value: '1' },
    { name: 'Yes for all', value: '2' },
    { name: 'No', value: '3' }
  ];
  constructor(private formBuilder: FormBuilder) {
    const notifyBackOptions = ['1', '2'];
    const notificationControls = this.notifyBackAlertOptions.map(
      item => new FormControl(notifyBackOptions.includes(item.value))
    );

    this.notificationForm = this.formBuilder.group({
      notifyBackEmail: [''],
      discontinuedOption: [''],
      notifyBackOptions: this.formBuilder.array(notificationControls)
    });
  }

  get notifyBackOptionsArr(): FormArray {
    return this.notificationForm.get('notifyBackOptions') as FormArray;
  }
  onSubmit() {}
}
