import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneService, Personne } from '../../services/personne.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-update-personne',
    templateUrl: './update-personne.page.html',
    styleUrls: ['./update-personne.page.scss'],
})
export class UpdatePersonnePage implements OnInit {
    personneId!: number;
    personne: Personne = { name : '' , city: '', phoneNumber: '' }; // Formulaire initial vide

    constructor(
        private route: ActivatedRoute,
        private personneService: PersonneService,
        private router: Router,
        private navCtrl: NavController
    ) {}

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
          const id = params.get('id') ?? ''; // Si 'id' est null, on utilise une chaîne vide par défaut
          this.personneId = +id; // Convertir l'ID en nombre
          if (this.personneId) {
              this.loadPersonne();
          } else {
              console.error('ID manquant ou invalide');
              // Gérer l'erreur si l'ID est incorrect
              this.navCtrl.navigateBack('/personnes-list');
          }
      });
  }
  

    loadPersonne() {
        this.personneService.getPersonneById(this.personneId).subscribe(personne => {
            this.personne = personne;
        });
    }

    updatePersonne() {
        this.personneService.updatePersonne(this.personneId, this.personne).subscribe(updatedPersonne => {
            // Naviguer vers la page de liste après la mise à jour
            this.navCtrl.navigateBack('/personnes-list');
        });
    }
}
