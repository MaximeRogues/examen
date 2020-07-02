import { Component, OnInit } from '@angular/core';
import { Ordi } from 'src/app/models/ordi';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdiService } from 'src/app/services/ordi.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ordi-detail',
  templateUrl: './ordi-detail.component.html',
  styleUrls: ['./ordi-detail.component.css']
})
export class OrdiDetailComponent implements OnInit {
  id: number;
  ordi: Ordi;
  listeOrdis: Ordi[];
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private ordiService: OrdiService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {

    // on récupère l'ordi qui était concerné par le bouton détails
    this.isLoading = true;
    this.ordiService.getOrdiByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Ordi) => {
      this.ordi = data;
      this.isLoading = false;
    });

    // on initialise isLoading à true, pour dire que la page charge
    this.isLoading = true;
    // au chargement, on remplit la liste avec la fonction getAllOrdis, pour afficher la liste au retour
    this.ordiService.getAllOrdis().subscribe((data: Ordi[]) => {
      this.listeOrdis = data;
      this.isLoading = false
    })
  }

  deleteOrdi(id: number) {
    this.isLoading = true;
    this.ordiService.deleteOrdi(id).subscribe(then => {
      this.ordiService.getAllOrdis().subscribe((data: Ordi []) => {
        this.listeOrdis = data;
        this.isLoading = false;
      })
    });
    this.router.navigate(['/home']);
    this.toastr.success('Cet ordinateur n\'est plus en stock', 'C\'est bon !');
    
  }

}
