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

export class Ninetales_213 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vulpix";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Barrier Shrine", powerType: PowerType.ABILITY, text: "Each player can't play any Stadium cards from his or her hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flickering Flames", cost: [], damage: "70", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "ROS";
  public name: string = "Ninetales";
  public fullName: string = "Ninetales ROS 21";
  public text: string = "Ninetales";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
