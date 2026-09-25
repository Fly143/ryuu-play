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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ErikaSVileplumeEx_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Erika's Gloom";
  public hp: number = 310;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lovely Fragrance", powerType: PowerType.ABILITY, text: "Once during your turn, you may use this Ability. Heal 30 damage from each of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bloom Powder", cost: [], damage: "160", text: "Your opponent's Active Pokémon is now Asleep and Poisoned." }
  ];
  public set: string = "ASC";
  public name: string = "Erika's Vileplume ex";
  public fullName: string = "Erika's Vileplume ex ASC 3";
  public text: string = "Erika's Vileplume ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 30);
    }
    return state;
  }
}
