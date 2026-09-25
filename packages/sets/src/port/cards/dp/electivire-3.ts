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

export class Electivire_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Electabuzz";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Intense Voltage", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), if Elekid is anywhere under Electivire, you may move a Lightning Energy attached to your Pokémon to Electivire. This power can't be used if Electivire is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Giga Impact", cost: [], damage: "60", text: "You may discard all Lightning Energy attached to Electivire. If you do, this attack's base damage is 120 instead of 60." }
  ];
  public set: string = "DP";
  public name: string = "Electivire";
  public fullName: string = "Electivire DP 3";
  public text: string = "Electivire";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
