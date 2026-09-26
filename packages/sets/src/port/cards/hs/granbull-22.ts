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

export class Granbull_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snubbull";
  public hp: number = 90;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Timid Tackle", cost: [], damage: "50", text: "Granbull does 20 damage to itself. Switch Granbull with 1 of your Benched Pokémon." },
      { name: "Chomp", cost: [], damage: "40+", text: "Does 40 damage plus 10 more damage for each damage counter on Granbull." }
  ];
  public set: string = "HS";
  public name: string = "Granbull";
  public fullName: string = "Granbull HS 22";
  public text: string = "Granbull";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
