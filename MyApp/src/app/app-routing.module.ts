import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },  
  {
    path: 'social-media',
    loadChildren: () => import('./social-media/social-media.module').then(m => m.SocialMediaPageModule)
  },
  {
    path: 'personal-details',
    loadChildren: () => import('./personal-details/personal-details.module').then(m => m.PersonalDetailsPageModule)
  },
  {
    path: 'work-details',
    loadChildren: () => import('./work-details/work-details.module').then(m => m.WorkDetailsPageModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills.module').then(m => m.SkillsPageModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module').then(m => m.ResumePageModule)
  },
  { path: 'contact', 
    loadChildren: () => import('./contact/contact.module').then( m=> m.ContactPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
