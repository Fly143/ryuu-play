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

export class Whimsicott_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cottonee";
  public hp: number = 70;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Windy Mischief", cost: [], damage: "", text: "Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon." },
      { name: "Rolling Tackle", cost: [], damage: "30", text: "" }
  ];
  public set: string = "BKT";
  public name: string = "Whimsicott";
  public fullName: string = "Whimsicott BKT 56";
  public text: string = "Whimsicott";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
