import { Component,OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  pokemonList : pokemon[]= POKEMONS;
  pokemonSelected : pokemon|undefined;

  ngOnInit(){
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId:string){
    const pokemon: pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemon);
      
    if(pokemon){
    console.log(`vous avez choisi le pokemon ${pokemon.name}`);
    this.pokemonSelected = pokemon;
    }else{
      console.log(`vous avez demander un pokemon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
}
