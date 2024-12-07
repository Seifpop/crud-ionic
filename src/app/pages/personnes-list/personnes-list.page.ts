import { Component, OnInit } from '@angular/core';
import { PersonneService, Personne } from '../../services/personne.service';

@Component({
    selector: 'app-personnes-list',
    templateUrl: './personnes-list.page.html',
    styleUrls: ['./personnes-list.page.scss'],
})
export class PersonnesListPage implements OnInit {
    personnes: Personne[] = [];

    constructor(private personneService: PersonneService) {}

    ngOnInit() {
        this.loadPersonnes();
    }

    ionViewWillEnter() {
      // Recharger la liste des personnes chaque fois qu'on revient sur la page
      this.loadPersonnes();
    }

    loadPersonnes() {
        this.personneService.getAllPersonnes().subscribe((data) => {
            this.personnes = data;
        });
    }
    deletePersonne(id: number){
      this.personneService.deletePersonne(id).subscribe(()=>{
      //// Supprimer la personne de la liste sans recharger l'API
      //this.personnes = this.personnes.filter(personne => personne.id !== id);
      this.loadPersonnes();
    
    });
  }
}