import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skill-principal',
  templateUrl: './skill-principal.component.html',
  styleUrls: ['./skill-principal.component.css']
})
export class SkillPrincipalComponent implements OnInit {

  skill: Skill[] = [];

  constructor(private skillService: SkillService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.getDataSkill();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  getDataSkill(): void {
    this.skillService.listSkill().subscribe(data => {this.skill = data});
  }

  onDeleteSkill(id?: number): void {
    if(id != undefined){
      this.skillService.deleteSkill(id).subscribe(
        data => {
          this.skillService.listSkill().subscribe(data => {this.skill = data});
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
