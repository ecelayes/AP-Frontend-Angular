import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project.model';
import { ProjectService } from 'src/app/service/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  project: Project = null;

  constructor(private projectService: ProjectService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.findProject(id).subscribe(
      data => {
        this.project = data;
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

  onUpdateProject():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.updateProject(id, this.project).subscribe(
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
