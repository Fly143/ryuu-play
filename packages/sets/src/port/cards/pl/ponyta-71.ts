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

export class Ponyta_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Smash Kick", cost: [], damage: "10", text: "" },
      { name: "Agility", cost: [], damage: "20", text: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Ponyta during your opponent's next turn." }
  ];
  public set: string = "PL";
  public name: string = "Ponyta";
  public fullName: string = "Ponyta PL 71";
  public text: string = "Ponyta";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* preventEffectsMarker */ state;
    }
    return state;
  }
}
