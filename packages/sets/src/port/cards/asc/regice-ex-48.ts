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

export class RegiceEx_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Regi Charge", cost: [], damage: "", text: "Attach up to 2 Basic Water Energy cards from your discard pile to this Pokémon." },
      { name: "Ice Prison", cost: [], damage: "140", text: "Discard 2 Energy from this Pokémon, and your opponent's Active Pokémon is now Paralyzed." }
  ];
  public set: string = "ASC";
  public name: string = "Regice ex";
  public fullName: string = "Regice ex ASC 48";
  public text: string = "Regice ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
