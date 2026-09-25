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

export class Electivire_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Electabuzz";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Motor Drive", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your discard pile for a Lightning Energy card and attach it to Electivire. This power can't be used if Electivire is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Discharge", cost: [], damage: "50×", text: "Discard all Lightning Energy attached to Electivire. Flip a coin for each Lightning Energy you discarded. This attack does 50 damage times the number of heads." }
  ];
  public set: string = "SW";
  public name: string = "Electivire";
  public fullName: string = "Electivire SW 25";
  public text: string = "Electivire";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* attachBasicFromDiscard */ state;
    }
    return state;
  }
}
