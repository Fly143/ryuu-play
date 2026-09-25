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

export class Qwilfish_1012 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bursting Needles", powerType: PowerType.ABILITY, text: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, put 6 damage counters on the Attacking Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Jab", cost: [], damage: "30", text: "Your opponent's Active Pokémon is now Poisoned." }
  ];
  public set: string = "BST";
  public name: string = "Qwilfish";
  public fullName: string = "Qwilfish BST 101";
  public text: string = "Qwilfish";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
