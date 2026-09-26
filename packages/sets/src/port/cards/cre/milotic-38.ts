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

export class Milotic_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Feebas";
  public hp: number = 120;
    public height?: number = 6.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dew Guard", powerType: PowerType.ABILITY, text: "Whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to you or your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Double Smash", cost: [], damage: "70×", text: "Flip 2 coins. This attack does 70 damage for each heads." }
  ];
  public set: string = "CRE";
  public name: string = "Milotic";
  public fullName: string = "Milotic CRE 38";
  public text: string = "Milotic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 70);
    }
    return state;
  }
}
