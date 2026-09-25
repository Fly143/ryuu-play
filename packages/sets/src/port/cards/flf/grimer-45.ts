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

export class Grimer_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lure Poison", cost: [], damage: "", text: "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. The new Defending Pokémon is now Poisoned." },
      { name: "Sludge Toss", cost: [], damage: "30", text: "" }
  ];
  public set: string = "FLF";
  public name: string = "Grimer";
  public fullName: string = "Grimer FLF 45";
  public text: string = "Grimer";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* flipHeadsGustOpponent */ state;
    }
    return state;
  }
}
