import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PersonEditComponent } from './component/person/person-edit/person-edit.component';
import { EducationEditComponent } from './component/education/education-edit/education-edit.component';
import { EducationNewComponent } from './component/education/education-new/education-new.component';
import { EducationPrincipalComponent } from './component/education/education-principal/education-principal.component';
import { ExperienceEditComponent } from './component/experience/experience-edit/experience-edit.component';
import { ExperienceNewComponent } from './component/experience/experience-new/experience-new.component';
import { ExperiencePrincipalComponent } from './component/experience/experience-principal/experience-principal.component';
import { ProjectEditComponent } from './component/project/project-edit/project-edit.component';
import { ProjectNewComponent } from './component/project/project-new/project-new.component';
import { ProjectPrincipalComponent } from './component/project/project-principal/project-principal.component';
import { SkillEditComponent } from './component/skill/skill-edit/skill-edit.component';
import { SkillNewComponent } from './component/skill/skill-new/skill-new.component';
import { SkillPrincipalComponent } from './component/skill/skill-principal/skill-principal.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PersonEditComponent,
    EducationEditComponent,
    EducationNewComponent,
    EducationPrincipalComponent,
    ExperienceEditComponent,
    ExperienceNewComponent,
    ExperiencePrincipalComponent,
    ProjectEditComponent,
    ProjectNewComponent,
    ProjectPrincipalComponent,
    SkillEditComponent,
    SkillNewComponent,
    SkillPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    NgCircleProgressModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
