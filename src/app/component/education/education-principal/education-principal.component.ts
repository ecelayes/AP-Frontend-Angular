import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education-principal',
  templateUrl: './education-principal.component.html',
  styleUrls: ['./education-principal.component.css']
})
export class EducationPrincipalComponent implements OnInit {

  education: Education[] = [];

  constructor(public educationService: EducationService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.listEducation();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  listEducation(): void {
    this.educationService.listEducation().subscribe(data => {this.education = data});
  }

  onDeleteEducation(id?: number): void {
    if(id != undefined){
      this.educationService.deleteEducation(id).subscribe(
        data => {
          this.educationService.listEducation().subscribe(data => {this.education = data});
          Swal.fire({
            title: 'Eliminado!',
            text: 'Se ha borrado exitosamente',
            icon: 'success'
          });
        },
        err => {
          Swal.fire({
            title: 'Error!',
            text: 'Un error inesperado ha ocurrido',
            icon: 'error'
          });
        }
        )
      }
    }
}
