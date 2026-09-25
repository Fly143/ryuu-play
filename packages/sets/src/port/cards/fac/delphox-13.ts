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

export class Delphox_132 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Braixen";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flickering Flames", cost: [], damage: "40", text: "Your opponent's Active Pokémon is now Asleep." },
      { name: "Psystorm", cost: [], damage: "20×", text: "This attack does 20 damage times the amount of Energy attached to all Pokémon in play." }
  ];
  public set: string = "FAC";
  public name: string = "Delphox";
  public fullName: string = "Delphox FAC 13";
  public text: string = "Delphox";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
