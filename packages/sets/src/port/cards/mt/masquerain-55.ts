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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Masquerain_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Surskit";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Centrifugal Force", cost: [], damage: "20×", text: "Does 20 damage times the number of Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost)." },
      { name: "Swirling Ripple", cost: [], damage: "30+", text: "If your opponent has any Water Pokémon in play, this attack does 30 damage plus 30 more damage and the Defending Pokémon is now Confused." }
  ];
  public set: string = "MT";
  public name: string = "Masquerain";
  public fullName: string = "Masquerain MT 55";
  public text: string = "Masquerain";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "damageTimesRetreatColorless:20");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
