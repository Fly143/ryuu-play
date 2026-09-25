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

export class HoundoomEx_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Houndour";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Evil Claw", cost: [], damage: "90", text: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn." },
      { name: "Hound's Fang", cost: [], damage: "220", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "PR-SV";
  public name: string = "Houndoom ex";
  public fullName: string = "Houndoom ex PR-SV 103";
  public text: string = "Houndoom ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
