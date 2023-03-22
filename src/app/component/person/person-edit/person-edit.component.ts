import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonService } from 'src/app/service/person.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  person: Person = null;

  constructor(
    private personService: PersonService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    public imageServicePhoto: ImageService,
    public imageServiceBanner: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personService.getPerson().subscribe(
      data => {
        this.person = data;
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

  onUpdatePerson():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.person.dirPhoto = this.imageServicePhoto.url;
    this.person.dirBanner = this.imageServiceBanner.url;
    this.personService.updatePerson(this.person).subscribe(
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

  uploadPhoto($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageServicePhoto.uploadImage($event, name);
  }

  uploadBanner($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "banner_" + id;
    this.imageServiceBanner.uploadImage($event, name);
  }
}
