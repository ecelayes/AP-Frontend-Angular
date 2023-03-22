import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/service/experience.service';
import { ImageService } from 'src/app/service/image.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-experience-new',
  templateUrl: './experience-new.component.html',
  styleUrls: ['./experience-new.component.css']
})
export class ExperienceNewComponent implements OnInit {

  company!: string;
  position!: string;
  startDate!: string;
  description!: string;
  endDate!: string;
  dirIcon!: string;

  constructor(
    private experienceService: ExperienceService, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public imageService: ImageService) { }

  ngOnInit(): void {}

  onNewExperience(): void {
    const experience = new Experience(this.company, 
                                    this.position, 
                                    this.description, 
                                    this.startDate, 
                                    this.endDate,
                                    this.dirIcon = this.imageService.url);
    console.log(experience);
    this.experienceService.saveExperience(experience).subscribe(data=>{
      Swal.fire({
        title: 'Agregado!',
        text: 'Se agregó exitosamente',
        icon: 'success'
      });
      this.router.navigate(['']);
    }, err=>{
      Swal.fire({
        title: 'Error!',
        text: 'Un error inesperado ha ocurrido',
        icon: 'error'
      });
      this.router.navigate(['']);
    });                                  
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
