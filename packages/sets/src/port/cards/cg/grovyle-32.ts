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

export class Grovyle_322 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Treecko";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Detect", cost: [], damage: "", text: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Grovyle during your opponent's next turn." },
      { name: "Smash Kick", cost: [], damage: "30", text: "" }
  ];
  public set: string = "CG";
  public name: string = "Grovyle";
  public fullName: string = "Grovyle CG 32";
  public text: string = "Grovyle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* preventEffectsMarker */ state;
    }
    return state;
  }
}
