import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project.model';
import { ProjectService } from 'src/app/service/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  nameProject!: string;
  dirImage!: string;
  startDate!: string;
  endDate!: string;
  description!: string;
  link!: string;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {}

  onNewProject(): void {
    const project = new Project(this.nameProject, 
                                this.dirImage,
                                this.startDate, 
                                this.endDate,
                                this.description,
                                this.link);
    console.log(project);
    this.projectService.saveProject(project).subscribe(data=>{
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

}
