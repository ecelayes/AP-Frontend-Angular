import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';
import { ImageService } from 'src/app/service/image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent implements OnInit {

  skill: Skill = null;

  constructor(
    private skillService: SkillService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.findSkill(id).subscribe(
      data => {
        this.skill = data;
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

  onUpdateSkill():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skill.dirIcon = this.imageService.url;
    this.skillService.updateSkill(id, this.skill).subscribe(
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
    const name = "habilidad_" + id;
    this.imageService.uploadImage($event, name);
  }
}
