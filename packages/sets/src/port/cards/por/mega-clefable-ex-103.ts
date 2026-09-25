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

export class MegaClefableEx_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clefairy";
  public hp: number = 320;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Luminous Wing", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shooting Moons", cost: [], damage: "120+", text: "You may discard up to 4 Energy cards from your hand, and this attack does 40 more damage for each card you discarded in this way." }
  ];
  public set: string = "POR";
  public name: string = "Mega Clefable ex";
  public fullName: string = "Mega Clefable ex POR 103";
  public text: string = "Mega Clefable ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 0);
    }
    return state;
  }
}
