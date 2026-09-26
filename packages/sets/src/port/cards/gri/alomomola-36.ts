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

export class Alomomola_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Borne Ashore", cost: [], damage: "", text: "Put a Basic Pokémon from either player's discard pile onto its owner's Bench." },
      { name: "Hydro Splash", cost: [], damage: "60", text: "" }
  ];
  public set: string = "GRI";
  public name: string = "Alomomola";
  public fullName: string = "Alomomola GRI 36";
  public text: string = "Alomomola";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
