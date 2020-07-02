import { Component, OnInit } from '@angular/core';
import { OrdiService } from 'src/app/services/ordi.service';
import { Ordi } from 'src/app/models/ordi';

@Component({
  selector: 'app-ordi',
  templateUrl: './ordi.component.html',
  styleUrls: ['./ordi.component.css']
})
export class OrdiComponent implements OnInit {
  // On déclare une liste d'ordis vide
  listeOrdis: Ordi[] ;
  isLoading : boolean;

  constructor(private ordiService: OrdiService) { }

  ngOnInit(): void {
    
    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    // au chargement, on remplit la liste avec la fonction getAllOrdis
    this.ordiService.getAllOrdis().subscribe((data: Ordi[]) => {
      this.listeOrdis = data;
      this.isLoading = false
    })
  }

}
