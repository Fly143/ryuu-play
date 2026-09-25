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

export class Dustox_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cascoon";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Boisterous Wind", powerType: PowerType.ABILITY, text: "Once during your turn, you may use this Ability. Flip a coin. If heads, put an Energy attached to your opponent's Active Pokémon into their hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Twilight Poison", cost: [], damage: "100", text: "Your opponent's Active Pokémon is now Asleep and Poisoned." }
  ];
  public set: string = "ASC";
  public name: string = "Dustox";
  public fullName: string = "Dustox ASC 15";
  public text: string = "Dustox";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
