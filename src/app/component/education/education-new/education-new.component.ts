import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';
import { ImageService } from 'src/app/service/image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education-new',
  templateUrl: './education-new.component.html',
  styleUrls: ['./education-new.component.css']
})
export class EducationNewComponent implements OnInit {

  institution!: string;
  degree!: string;
  career!: string;
  startDate!: string;
  endDate!: string;
  dirIcon!: string;

  constructor(
    private educationService: EducationService, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public imageService: ImageService) { }

  ngOnInit(): void {}

  onNewEducation(): void {
    const education = new Education(this.institution, 
                                    this.degree, 
                                    this.career, 
                                    this.startDate, 
                                    this.endDate,
                                    this.dirIcon = this.imageService.url);
    console.log(education);
    this.educationService.saveEducation(education).subscribe(data=>{
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
    const name = "educacion_" + id;
    this.imageService.uploadImage($event, name);
  }
}
