import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Drowzee_74 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sleep Inducer", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it. The new Defending Pokémon is now Asleep." },
      { name: "Tackle", cost: [], damage: "20", text: "" }
  ];
  public set: string = "AQ";
  public name: string = "Drowzee";
  public fullName: string = "Drowzee AQ 74";
  public text: string = "Drowzee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* flipHeadsGustOpponent */ state;
    }
    return state;
  }
}
