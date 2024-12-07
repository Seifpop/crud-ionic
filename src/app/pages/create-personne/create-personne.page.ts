import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse, HttpResponseType } from '@capacitor/core';
import { NavController } from '@ionic/angular';
import { Personne, PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-create-personne',
  templateUrl: './create-personne.page.html',
  styleUrls: ['./create-personne.page.scss'],
})
export class CreatePersonnePage  {
  personne : Personne = {name :'' , city :'' , phoneNumber: ''};


  constructor(
    private personneService: PersonneService,
    private navCtrl: NavController,
    private router: Router
  ) { }
  createPersonne() {
    if (this.personne.city && this.personne.phoneNumber) {
      this.personneService.createPersonne(this.personne).subscribe(
        (response) => {
          // Vous pouvez rediriger l'utilisateur vers la page des personnes après la création
          this.router.navigate(['/personnes-list']);
        },
        (error) => {
          console.error('Erreur lors de la création de la personne', error);
        }
      );
    }
  }
  leave(){
    this.router.navigate(['/personnes-list']);
  }
}
