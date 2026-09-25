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

export class Sceptile_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grovyle";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Green Breath", powerType: PowerType.ABILITY, text: "When you attach a Grass Energy card from your hand to Sceptile, remove 2 damage counters from Sceptile.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Leaf Blast", cost: [], damage: "20×", text: "Does 20 damage times the amount of Grass Energy attached to Sceptile." },
      { name: "Poison Claws", cost: [], damage: "60", text: "The Defending Pokémon is now Poisoned." }
  ];
  public set: string = "AR";
  public name: string = "Sceptile";
  public fullName: string = "Sceptile AR 30";
  public text: string = "Sceptile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
