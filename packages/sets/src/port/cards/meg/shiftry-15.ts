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

export class Shiftry_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nuzleaf";
  public hp: number = 160;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Reversing Gust", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. Shuffle that Pokémon and all attached cards into their deck." },
      { name: "Perplex", cost: [], damage: "100", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "MEG";
  public name: string = "Shiftry";
  public fullName: string = "Shiftry MEG 15";
  public text: string = "Shiftry";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
