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

export class SerperiorV_170 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 3.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Noble Light", cost: [], damage: "", text: "Heal 30 damage from each Pokémon (both yours and your opponent's)." },
      { name: "Solar Beam", cost: [], damage: "120", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Serperior V";
  public fullName: string = "Serperior V PGO 170";
  public text: string = "Serperior V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
