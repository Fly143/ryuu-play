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

export class Noivern_128 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Noibat";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tuning Echo", powerType: PowerType.ABILITY, text: "If you have the same number of cards in your hand as your opponent, ignore all Energy in the cost of Frightening Howl used by this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Frightening Howl", cost: [], damage: "110", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "JTG";
  public name: string = "Noivern";
  public fullName: string = "Noivern JTG 128";
  public text: string = "Noivern";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
