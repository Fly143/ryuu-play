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

export class Politoed_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poliwhirl";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Enthusiasm", powerType: PowerType.ABILITY, text: "If you have Poliwag, Poliwhirl, and Poliwrath in play, each of these Pokémon's attacks does 60 more damage to the Defending Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Frog Hop", cost: [], damage: "40+", text: "Flip a coin. If heads, this attack does 40 damage plus 40 more damage." }
  ];
  public set: string = "SF";
  public name: string = "Politoed";
  public fullName: string = "Politoed SF 12";
  public text: string = "Politoed";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
