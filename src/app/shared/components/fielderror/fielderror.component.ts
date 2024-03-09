import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fielderror',
  templateUrl: './fielderror.component.html',
  styleUrls: ['./fielderror.component.scss']
})
export class FielderrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() displayError: boolean = false;
  @Input() errorMsg!: string;
}
