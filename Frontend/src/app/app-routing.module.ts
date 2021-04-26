import { AuditsComponent } from './audits/audits.component';
import { TrendsComponent } from './trends/trends.component';
import { ViewSingleDemandComponent } from './view-single-demand/view-single-demand.component';
import { UpdateDemandComponent } from './update-demand/update-demand.component';
import { AddDemandComponent } from './add-demand/add-demand.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'home',component:HomeComponent},
  {path: 'addDemand',component:AddDemandComponent},
  {path: 'updateDemand/:id',component:UpdateDemandComponent},
  {path: 'viewDemand/:id',component:ViewSingleDemandComponent},
  {path: 'trends', component:TrendsComponent},
  {path: 'audits', component:AuditsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
