import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  topbarFormControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  value = '';

  constructor() {}

  ngOnInit(): void {}

  public handleDeleteOption(index: number): void {
    this.options.splice(index, 1);
  }
}
