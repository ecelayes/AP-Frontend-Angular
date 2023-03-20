import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {

  education: Education = null;

  constructor(private educationService: EducationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.findEducation(id).subscribe(
      data => {
        this.education = data;
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

  onUpdateEducation():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.updateEducation(id, this.education).subscribe(
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

}
