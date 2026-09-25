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

export class Magcargo_33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slugma";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Magma Pool", powerType: PowerType.ABILITY, text: "If Magcargo is your Active Pokémon and moves to the Bench, remove 1 Fire Energy card attached to Magcargo, if any, and attach it to the new Active Pokémon. (You can't choose an Energy card that you used to pay the Retreat Cost.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lava Flow", cost: [], damage: "40+", text: "You may discard any number of Fire Energy cards attached to Magcargo when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each Fire Energy card you discarded in this way." }
  ];
  public set: string = "N3";
  public name: string = "Magcargo";
  public fullName: string = "Magcargo N3 33";
  public text: string = "Magcargo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
