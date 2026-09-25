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

export class Cacturne_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cacnea";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rapid-Fire Needles", cost: [], damage: "60", text: "Does 30 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Payback", cost: [], damage: "30+", text: "If your opponent has only 1 Prize card left, this attack does 60 more damage and discard an Energy attached to the Defending Pokémon." }
  ];
  public set: string = "FLF";
  public name: string = "Cacturne";
  public fullName: string = "Cacturne FLF 10";
  public text: string = "Cacturne";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
