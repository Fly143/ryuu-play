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

export class Heatmor_23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Luring Flame", cost: [], damage: "", text: "Switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. The new Defending Pokémon is now Burned." },
      { name: "Fiery Licks", cost: [], damage: "50×", text: "Discard the top 4 cards of your deck. This attack does 50 damage times the number of Fire Energy cards discarded." }
  ];
  public set: string = "PLB";
  public name: string = "Heatmor";
  public fullName: string = "Heatmor PLB 23";
  public text: string = "Heatmor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 4);
    }
    return state;
  }
}
