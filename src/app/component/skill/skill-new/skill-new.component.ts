import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';
import { ImageService } from 'src/app/service/image.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-skill-new',
  templateUrl: './skill-new.component.html',
  styleUrls: ['./skill-new.component.css']
})
export class SkillNewComponent implements OnInit {

  nameSkill!: string;
  dirIcon!: string;
  percentage!: number;

  constructor(
    private skillService: SkillService, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public imageService: ImageService) { }

  ngOnInit(): void {}

  onNewSkill(): void {
    const skill = new Skill(this.nameSkill, 
                            this.dirIcon = this.imageService.url,
                            this.percentage);
    this.skillService.saveSkill(skill).subscribe(data=>{
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
    const name = "habilidad_" + id;
    this.imageService.uploadImage($event, name);
  }
}
