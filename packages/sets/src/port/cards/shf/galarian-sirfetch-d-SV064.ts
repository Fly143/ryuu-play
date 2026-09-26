import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class GalarianSirfetchDSV064 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Farfetch'd";
  public hp: number = 130;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pierce", cost: [], damage: "40", text: "" },
      { name: "Meteor Assault", cost: [], damage: "180", text: "This Pokémon can't use Meteor Assault again until it leaves the Active Spot." }
  ];
  public set: string = "SHF";
  public name: string = "Galarian Sirfetch'd";
  public fullName: string = "Galarian Sirfetch'd SHF SV064";
  public text: string = "Galarian Sirfetch'd";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
