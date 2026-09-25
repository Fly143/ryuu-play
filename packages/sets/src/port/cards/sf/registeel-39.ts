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

export class Registeel_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Regi Heal", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard 2 cards from your hand. Then, remove 3 damage counters from Registeel. This power can't be used if Registeel is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rotating Claws", cost: [], damage: "50", text: "You may discard an Energy card attached to Registeel. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Registeel." }
  ];
  public set: string = "SF";
  public name: string = "Registeel";
  public fullName: string = "Registeel SF 39";
  public text: string = "Registeel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
