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

export class Marowak_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cubone";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bonemerang", cost: [], damage: "60×", text: "Flip 2 coins. This attack does 60 damage times the number of heads." },
      { name: "Bone Impact", cost: [], damage: "20+", text: "If there is any Stadium card in play, this attack does 20 damage plus 60 more damage. Discard that Stadium card." }
  ];
  public set: string = "TM";
  public name: string = "Marowak";
  public fullName: string = "Marowak TM 44";
  public text: string = "Marowak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 60);
    }
    return state;
  }
}
