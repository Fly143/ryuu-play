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

export class SwabluSH5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Roost", cost: [], damage: "", text: "Remove 4 damage counters from Swablu. Swablu can't retreat during your next turn." },
      { name: "Mirror Move", cost: [], damage: "", text: "If Swablu was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to Swablu to the Defending Pokémon." },
      { name: "Fury Attack", cost: [], damage: "10×", text: "Flip 3 coins. This attack does 10 damage times the number of heads." }
  ];
  public set: string = "PL";
  public name: string = "Swablu";
  public fullName: string = "Swablu PL SH5";
  public text: string = "Swablu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 10);
    }
    return state;
  }
}
