import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/service/experience.service';
import { ImageService } from 'src/app/service/image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {

  experience: Experience = null;

  constructor(
    private experienceService: ExperienceService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.findExperience(id).subscribe(
      data => {
        this.experience = data;
      }, err => {
        Swal.fire({
          title: 'Error!',
          text: 'Un error inesperado ha ocurrido',
          icon: 'error'
        });
        this.router.navigate(['']);
      }
    )
  }

  onUpdateExperience():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experience.dirIcon = this.imageService.url;
    this.experienceService.updateExperience(id, this.experience).subscribe(
      data => {
        Swal.fire({
          title: 'Modificado!',
          text: 'Se ha modificado exitosamente',
          icon: 'success'
        });
        this.router.navigate(['']);
      }, err => {
        Swal.fire({
          title: 'Error!',
          text: 'Un error inesperado ha ocurrido',
          icon: 'error'
        });
        this.router.navigate(['']);
      }
    )
  }

  back(){
    this.router.navigate(['/'])
  }

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "experiencia_" + id;
    this.imageService.uploadImage($event, name);
  }
}
