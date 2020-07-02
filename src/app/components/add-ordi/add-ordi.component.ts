import { Component, OnInit } from '@angular/core';
import { Ordi } from 'src/app/models/ordi';
import { OrdiService } from 'src/app/services/ordi.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-ordi',
  templateUrl: './add-ordi.component.html',
  styleUrls: ['./add-ordi.component.css']
})
export class AddOrdiComponent implements OnInit {

  ordi: Ordi;
  isLoading: boolean;
  listeCategories: string[];
  listeTypes: string[];
  listeMarques: string[];

  constructor(private ordiService: OrdiService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    // on déclare un ordi vide
    this.ordi = new Ordi();    
    this.isLoading = false;

    this.listeCategories = this.ordiService.listeCategories;
    this.listeTypes = this.ordiService.listeTypes;
    this.listeMarques = this.ordiService.listeMarques;

  }

  
  

  submitOrdi() {
  //lance la fonction addOrdi de ordi.service
  this.ordiService.addOrdi(this.ordi).subscribe(then => {
    // change l'url avec la route '/home'
    this.router.navigate(['/home']);
  });
  this.toastr.success('Ordinateur ajouté au stock','C\'est bon !')
  }

}
