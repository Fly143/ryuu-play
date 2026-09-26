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

export class Houndoom_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Houndour";
  public hp: number = 90;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dark Fang", cost: [], damage: "20", text: "Choose 1 card from your opponent's hand without looking and discard it." },
      { name: "Black Fire", cost: [], damage: "40+", text: "You may discard a Fire or Darkness Energy attached to Houndoom. If you discard a Fire Energy, the Defending Pokémon is now Burned. If you discard a Darkness Energy, this attack does 40 damage plus 30 more damage." }
  ];
  public set: string = "GE";
  public name: string = "Houndoom";
  public fullName: string = "Houndoom GE 18";
  public text: string = "Houndoom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
