import { Component } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl: string = 'http://localhost:3333/';

  constructor(private momentService: MomentService) {
    this.getMoments();
  }

  getMoments(): void {
    this.momentService.getMoments().subscribe((response) => {
      const data = response.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleString('pt-BR');
      });

      this.allMoments = data;
      this.moments = data;
    });
  }
}
