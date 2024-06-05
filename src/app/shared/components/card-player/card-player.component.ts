import { Component, OnInit,Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-card-player',
  standalone: false,
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit{
  @Input() mode:'small' | 'big' = 'small';
  @Input() track: TrackModel = {_id:0,name:'',album:'',url:'',cover:''}

  constructor(private multimediaService: MultimediaService){}
  ngOnInit(): void {

  }

  //? inyectamos y establecemos
  sendPlay(track: TrackModel): void {
    console.log('Enviando cancion al reproductor', track);
    this.multimediaService.callback.emit(track);
  }
}
