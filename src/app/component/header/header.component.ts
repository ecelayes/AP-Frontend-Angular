import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  person: Person = new Person("", "", "", "", "", "", "");
  isLogged = false;

  constructor(public personService: PersonService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getDataPerson();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  getDataPerson(){
    this.personService.getPerson().subscribe(data => {this.person = data});
  }

}
