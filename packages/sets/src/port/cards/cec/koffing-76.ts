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

export class Koffing_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Blow-Away Bomb", powerType: PowerType.ABILITY, text: "Once during your turn, when you discard this Pokémon with the effect of Roxie, you may put 1 damage counter on each of your opponent's Pokémon. (Place damage counters after the effect of Roxie.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Gas", cost: [], damage: "10", text: "Your opponent's Active Pokémon is now Poisoned." }
  ];
  public set: string = "CEC";
  public name: string = "Koffing";
  public fullName: string = "Koffing CEC 76";
  public text: string = "Koffing";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
