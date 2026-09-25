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

export class SerperiorVTG13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Noble Light", cost: [], damage: "", text: "Heal 30 damage from each Pokémon (both yours and your opponent's)." },
      { name: "Solar Beam", cost: [], damage: "120", text: "" }
  ];
  public set: string = "SIT";
  public name: string = "Serperior V";
  public fullName: string = "Serperior V SIT TG13";
  public text: string = "Serperior V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
