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

export class AlakazamE4LVX_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alakazam E4";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Damage Switch", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon SP to another of your Pokémon SP. This power can't be used if Alakazam E4 is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mind Shock", cost: [], damage: "50", text: "This attack's damage isn't affected by Weakness or Resistance." }
  ];
  public set: string = "RR";
  public name: string = "Alakazam E4 LV.X";
  public fullName: string = "Alakazam E4 LV.X RR 103";
  public text: string = "Alakazam E4 LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "moveDamageCounters");
    }
    return state;
  }
}
