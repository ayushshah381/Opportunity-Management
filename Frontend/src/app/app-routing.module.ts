import { AuditsComponent } from './audits/audits.component';
import { TrendsComponent } from './trends/trends.component';
import { ViewSingleDemandComponent } from './view-single-demand/view-single-demand.component';
import { UpdateDemandComponent } from './update-demand/update-demand.component';
import { AddDemandComponent } from './add-demand/add-demand.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AllDemandsComponent } from './all-demands/all-demands.component';
import { SingleauditComponent } from './singleaudit/singleaudit.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '',component: LoginComponent,pathMatch: 'full'},
  {path: 'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path: 'addDemand',component:AddDemandComponent,canActivate:[AuthGuard]},
  {path: 'updateDemand/:id',component:UpdateDemandComponent,canActivate:[AuthGuard]},
  {path: 'viewDemand/:id',component:ViewSingleDemandComponent,canActivate:[AuthGuard]},
  {path: 'viewAudit/:id',component:SingleauditComponent,canActivate:[AuthGuard]},
  {path: 'allDemands',component:AllDemandsComponent,canActivate:[AuthGuard]},
  {path: 'trends', component:TrendsComponent,canActivate:[AuthGuard]},
  {path: 'audits', component:AuditsComponent,canActivate:[AuthGuard]},
  {path: '**', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
