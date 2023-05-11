import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.setupForm();
    console.log(this.form);
  }

  setupForm() {
    this.form = new FormGroup({
      search: new FormControl()
    });
  }

  getValue(event: Event) {
    timer(2000).subscribe(() => {
      console.log((event.target as HTMLInputElement).value);
    })
  }

}
