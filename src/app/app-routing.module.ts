import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PersonEditComponent } from './component/person/person-edit/person-edit.component';
import { EducationNewComponent } from './component/education/education-new/education-new.component';
import { EducationEditComponent } from './component/education/education-edit/education-edit.component';
import { ExperienceNewComponent } from './component/experience/experience-new/experience-new.component';
import { ExperienceEditComponent } from './component/experience/experience-edit/experience-edit.component';
import { ProjectNewComponent } from './component/project/project-new/project-new.component';
import { ProjectEditComponent } from './component/project/project-edit/project-edit.component';
import { SkillNewComponent } from './component/skill/skill-new/skill-new.component';
import { SkillEditComponent } from './component/skill/skill-edit/skill-edit.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'editPerson/:id', component: PersonEditComponent},
  {path:'newEducation', component: EducationNewComponent},
  {path:'editEducation/:id', component: EducationEditComponent},
  {path:'newExperience', component: ExperienceNewComponent},
  {path:'editExperience/:id', component: ExperienceEditComponent},
  {path:'newProject', component: ProjectNewComponent},
  {path:'editProject/:id', component: ProjectEditComponent},
  {path:'newSkill', component: SkillNewComponent},
  {path:'editSkill/:id', component: SkillEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
