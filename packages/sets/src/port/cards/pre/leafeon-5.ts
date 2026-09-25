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

export class Leafeon_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Leaflet Blessings", cost: [], damage: "", text: "Attach a Basic Grass Energy card from your hand to 1 of your Benched Pokémon. If you do, heal all damage from that Pokémon." },
      { name: "Solar Beam", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PRE";
  public name: string = "Leafeon";
  public fullName: string = "Leafeon PRE 5";
  public text: string = "Leafeon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
