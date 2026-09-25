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

export class Slaking_162 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vigoroth";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stir and Snooze", powerType: PowerType.ABILITY, text: "If this Pokémon is Asleep, flip 2 coins instead of 1 during Pokémon Checkup. If either of them is tails, this Pokémon is still Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slacker's Headstrike", cost: [], damage: "240", text: "This Pokémon is now Asleep." }
  ];
  public set: string = "PAL";
  public name: string = "Slaking";
  public fullName: string = "Slaking PAL 162";
  public text: string = "Slaking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
