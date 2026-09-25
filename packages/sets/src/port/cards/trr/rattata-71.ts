import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Rattata_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Scramble", powerType: PowerType.ABILITY, text: "As long as your opponent has any Pokémon-ex as his or her Active Pokémon, the Retreat Cost for Rattata is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fury Swipes", cost: [], damage: "10×", text: "Flip 3 coins. This attack does 10 damage times the number of heads." }
  ];
  public set: string = "TRR";
  public name: string = "Rattata";
  public fullName: string = "Rattata TRR 71";
  public text: string = "Rattata";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
