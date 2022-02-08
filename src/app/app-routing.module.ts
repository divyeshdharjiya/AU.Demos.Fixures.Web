import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';


const routes: Routes = [{
  path: 'search',
  component: SearchPageComponent
},
{
  path: '',
  redirectTo: '/search',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
