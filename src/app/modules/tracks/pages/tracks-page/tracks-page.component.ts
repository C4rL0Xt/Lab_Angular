import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import * as dataRaw from 'src/app/data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  standalone: false,
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy{
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  //? establecemos 2 arreglo y actualizamos el html de este compoenente

  constructor(private trackService: TrackService){}

  //subscripcion a un observable para usar sus datos
  ngOnInit(): void {
    const observer1$ = this.trackService.dataTracksTrending$.subscribe(reponse => {
      this.tracksTrending = reponse
      this.tracksRandom = reponse
      console.log('Canciones trending',reponse);
    })

    const observer2$ = this.trackService.dataTracksRandom$.subscribe(response => {
      this.tracksRandom = [... this.tracksRandom, ... response]
      console.log('Canciones Random entrando ...', response);
    })
    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
      this.listObservers$.forEach(u => u.unsubscribe());
  }

}
