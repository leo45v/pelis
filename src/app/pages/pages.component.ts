import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  constructor(private readonly testService: TestService) {}

  ngOnInit(): void {}

  click() {
    console.log(this.testService.title);
  }
}
