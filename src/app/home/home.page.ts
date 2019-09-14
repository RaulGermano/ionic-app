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

	async GetPokemonList() {
		await this.http
			.get('https://pokeapi.co/api/v2/pokemon/')
			.subscribe(data => {
				const list = <any>data;

				this.pokemonList = list.results;
			});
	}
}
