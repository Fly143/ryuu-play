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

export class Tropius_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Curative Bower", powerType: PowerType.ABILITY, text: "All of your Pokémon that have Grass Energy attached can't be Confused, and if they are already Confused, they recover from that Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slicing Blade", cost: [], damage: "100", text: "" }
  ];
  public set: string = "FST";
  public name: string = "Tropius";
  public fullName: string = "Tropius FST 5";
  public text: string = "Tropius";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
