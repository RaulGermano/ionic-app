import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss']
})
export class HomePage {
	pokemonList: any = [];

	constructor(public http: HttpClient) {}

	// GetPokemonList() {
	// 	this.http.get('https://pokeapi.co/api/v2/pokemon/').subscribe(data => {
	// 		const list = <any>data;

	// 		this.pokemonList = list.results;
	// 	});
	// }

	async GetPokemonList() {
		const response = await fetch(
			'http://localhost:3030/select-parkings/?excluded=false'
		);
		// const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
		const list = await response.json();

		console.log(list);

		// this.pokemonList = list.results;
	}
}
