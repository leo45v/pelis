import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  show: boolean = false;

  constructor(private readonly loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.getState().subscribe((state) => {
      this.show = state;
    });
  }
}
