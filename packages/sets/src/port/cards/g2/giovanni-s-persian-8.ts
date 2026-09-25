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

export class GiovanniSPersian_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Giovanni's Meowth";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Call the Boss", powerType: PowerType.ABILITY, text: "When you play Giovanni's Persian from your hand, you may search your deck for the Trainer card named Giovanni, show it to your opponent, and put it into your hand. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ambush", cost: [], damage: "20+", text: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage." }
  ];
  public set: string = "G2";
  public name: string = "Giovanni's Persian";
  public fullName: string = "Giovanni's Persian G2 8";
  public text: string = "Giovanni's Persian";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
