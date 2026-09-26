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
import { commonEffects } from '../../../common';

export class BurmySandyCloak_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Iron Defense", cost: [], damage: "", text: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Burmy Sandy Cloak during your opponent's next turn." },
      { name: "Tackle", cost: [], damage: "30", text: "" }
  ];
  public set: string = "LA";
  public name: string = "Burmy Sandy Cloak";
  public fullName: string = "Burmy Sandy Cloak LA 54";
  public text: string = "Burmy Sandy Cloak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    return state;
  }
}
