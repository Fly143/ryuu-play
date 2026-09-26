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

export class GalarianPerrserker_127 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Meowth";
  public hp: number = 120;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Slash", cost: [], damage: "50", text: "" },
      { name: "Claw Dagger", cost: [], damage: "80×", text: "Flip 3 coins. This attack does 80 damage for each heads." }
  ];
  public set: string = "RCL";
  public name: string = "Galarian Perrserker";
  public fullName: string = "Galarian Perrserker RCL 127";
  public text: string = "Galarian Perrserker";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 80);
    }
    return state;
  }
}
