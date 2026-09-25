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

export class Swellow_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Taillow";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Focus Energy", cost: [], damage: "", text: "During your next turn, base damage of Swellow's Agility is 70 instead of 30." },
      { name: "Agility", cost: [], damage: "30", text: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Swellow during your opponent's next turn." }
  ];
  public set: string = "POP1";
  public name: string = "Swellow";
  public fullName: string = "Swellow POP1 15";
  public text: string = "Swellow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* preventEffectsMarker */ state;
    }
    return state;
  }
}
