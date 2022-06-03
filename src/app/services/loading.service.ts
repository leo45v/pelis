import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private state = new BehaviorSubject<boolean>(false);

  constructor() {}

  getState(): Observable<boolean> {
    return this.state.asObservable();
  }

  setState(state: boolean): void {
    this.state.next(state);
  }
}
