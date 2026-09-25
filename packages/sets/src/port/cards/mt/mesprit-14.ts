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

export class Mesprit_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Upper Material", powerType: PowerType.ABILITY, text: "If you have Uxie and Azelf in play, the Retreat Cost for each Uxie, Mesprit, and Azelf (both yours and your opponent's) is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Teleportation Burst", cost: [], damage: "30", text: "You may switch Mesprit with 1 of your Benched Pokémon." }
  ];
  public set: string = "MT";
  public name: string = "Mesprit";
  public fullName: string = "Mesprit MT 14";
  public text: string = "Mesprit";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
