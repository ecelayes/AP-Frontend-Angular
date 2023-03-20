import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience-principal',
  templateUrl: './experience-principal.component.html',
  styleUrls: ['./experience-principal.component.css']
})
export class ExperiencePrincipalComponent implements OnInit {

  experience: Experience[] = [];

  constructor(private experienceService: ExperienceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.getDataExperience();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  getDataExperience(): void {
    this.experienceService.listExperience().subscribe(data => {this.experience = data});
  }

  onDeleteExperience(id?: number): void {
    if(id != undefined){
      this.experienceService.deleteExperience(id).subscribe(
        data => {
          this.experienceService.listExperience().subscribe(data => {this.experience = data});
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
