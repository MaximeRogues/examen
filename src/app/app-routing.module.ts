import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrdiDetailComponent } from './components/ordi-detail/ordi-detail.component';
import { AddOrdiComponent } from './components/add-ordi/add-ordi.component';
import { EditOrdiComponent } from './components/edit-ordi/edit-ordi.component';
import { OrdiComponent } from './components/ordi/ordi.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},

  {path: 'ordi', component: OrdiComponent},
  {path: 'ordi/:id', component: OrdiDetailComponent},
  {path: 'add-ordi', component: AddOrdiComponent},
  {path: 'edit-ordi/:id', component: EditOrdiComponent},

  
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
