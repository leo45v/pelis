import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(@Inject('test_title') public title: any) {
    console.log(title);
  }
}
