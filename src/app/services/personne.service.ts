import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Personne {
    id?: number;
    name : string;
    city: string;
    phoneNumber: string;
}

@Injectable({
    providedIn: 'root',
})
export class PersonneService {
    private apiUrl = 'http://localhost:8082/api/personnes'; // URL du backend

    constructor(private http: HttpClient) {}

    // Récupérer toutes les personnes
    getAllPersonnes(): Observable<Personne[]> {
        return this.http.get<Personne[]>(this.apiUrl);
    }

    // Ajouter une personne
    createPersonne(personne: Personne): Observable<Personne> {
        return this.http.post<Personne>(this.apiUrl, personne);
    }

    // Méthode pour récupérer une personne par son ID
    getPersonneById(id: number): Observable<Personne> {
        return this.http.get<Personne>(`${this.apiUrl}/${id}`);
    }

    // Méthode pour mettre à jour une personne
    updatePersonne(id: number, personne: Personne): Observable<Personne> {
        return this.http.put<Personne>(`${this.apiUrl}/${id}`, personne);
    }
    // Méthode pour mettre à jour une personne
    deletePersonne(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`,);
    }

    
}
