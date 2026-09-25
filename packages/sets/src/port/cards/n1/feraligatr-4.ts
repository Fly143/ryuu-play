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

export class Feraligatr_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Croconaw";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Berserk", powerType: PowerType.ABILITY, text: "When you play Feraligatr from your hand, flip a coin. If heads, discard the top 5 cards from your opponent's deck. If tails, discard the top 5 cards from your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Chomp", cost: [], damage: "50+", text: "Flip a number of coins equal to the number of damage counters on Feraligatr. This attack does 50 damage plus 10 more damage for each heads." }
  ];
  public set: string = "N1";
  public name: string = "Feraligatr";
  public fullName: string = "Feraligatr N1 4";
  public text: string = "Feraligatr";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
