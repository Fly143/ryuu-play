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

export class Mabosstiff_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Maschiff";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bite", cost: [], damage: "60", text: "" },
      { name: "Plunging Headbutt", cost: [], damage: "210", text: "During your opponent's next turn, this Pokémon takes 100 more damage from attacks (after applying Weakness and Resistance)." }
  ];
  public set: string = "PBL";
  public name: string = "Mabosstiff";
  public fullName: string = "Mabosstiff PBL 58";
  public text: string = "Mabosstiff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
