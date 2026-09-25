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

export class VespiquenE4_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Royal Gain", powerType: PowerType.ABILITY, text: "When you attach a Grass Energy card from your hand to Vespiquen E4, remove 1 damage counter from Vespiquen E4.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Leaf Needle", cost: [], damage: "30+", text: "Flip a coin for each Grass Energy attached to Vespiquen E4. This attack does 30 damage plus 20 more damage for each heads." }
  ];
  public set: string = "RR";
  public name: string = "Vespiquen E4";
  public fullName: string = "Vespiquen E4 RR 35";
  public text: string = "Vespiquen E4";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
