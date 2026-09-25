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

export class Skarmory_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Metallic Lift", powerType: PowerType.ABILITY, text: "If Skarmory has any Metal Energy attached to it, the Retreat Cost for Skarmory is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spearhead", cost: [], damage: "", text: "Draw a card." },
      { name: "Heavy Metal", cost: [], damage: "10+", text: "Flip a coin for each Metal Energy attached to Skarmory. This attack does 10 damage plus 20 more damage for each heads." }
  ];
  public set: string = "DX";
  public name: string = "Skarmory";
  public fullName: string = "Skarmory DX 26";
  public text: string = "Skarmory";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
