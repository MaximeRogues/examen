import { Component, OnInit } from '@angular/core';
import { Ordi } from 'src/app/models/ordi';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdiService } from 'src/app/services/ordi.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-ordi',
  templateUrl: './edit-ordi.component.html',
  styleUrls: ['./edit-ordi.component.css']
})
export class EditOrdiComponent implements OnInit {
  id: number;
  ordi: Ordi;
  listeOrdis: Ordi[];
  isLoading: boolean;

  listeCategories: string[];
  listeTypes: string[];
  listeMarques: string[];

  constructor(private route: ActivatedRoute, private ordiService: OrdiService, private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
     // on récupère le ordi qui était concerné par le bouton détails
     this.isLoading = true;
     this.ordiService.getOrdiByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Ordi) => {
       this.ordi = data;
       this.isLoading = false;
     });
 
     this.listeCategories = this.ordiService.listeCategories;
     this.listeTypes = this.ordiService.listeTypes;
     this.listeMarques = this.ordiService.listeMarques;
 
  }



  updateOrdi() {
    //lance la fonction updateOrdi de ordi.service
    this.ordiService.updateOrdi(this.ordi).subscribe(then => {
     // change l'url avec la route '/home'
     this.router.navigate(['/home']);
     this.toastr.success('Cet ordinateur a été modifié', 'C\'est bon !');

     });
   }
}
