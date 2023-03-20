import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectService } from 'src/app/service/project.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-principal',
  templateUrl: './project-principal.component.html',
  styleUrls: ['./project-principal.component.css']
})
export class ProjectPrincipalComponent implements OnInit {

  project: Project[] = [];

  constructor(private projectService: ProjectService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.getDataProject();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  getDataProject(): void {
    this.projectService.listProject().subscribe(data => {this.project = data});
  }

  onDeleteProject(id?: number): void {
    if(id != undefined){
      this.projectService.deleteProject(id).subscribe(
        data => {
          this.projectService.listProject().subscribe(data => {this.project = data});
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
