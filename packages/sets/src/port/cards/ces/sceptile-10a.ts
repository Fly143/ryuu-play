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

export class Sceptile_10a extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grovyle";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Power of Nature", powerType: PowerType.ABILITY, text: "Prevent all damage done to your Pokémon that have any Grass Energy attached to them by attacks from your opponent's Ultra Beasts.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Powerful Storm", cost: [], damage: "20×", text: "This attack does 20 damage times the amount of Energy attached to all of your Pokémon." }
  ];
  public set: string = "CES";
  public name: string = "Sceptile";
  public fullName: string = "Sceptile CES 10a";
  public text: string = "Sceptile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
