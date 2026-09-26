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

export class StevenSBaltoy_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Summoning Sign", cost: [], damage: "", text: "Search your deck for up to 2 Basic Steven's Pokémon and put them onto your Bench. Then, shuffle your deck." },
      { name: "Psychic Sphere", cost: [], damage: "20", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Steven's Baltoy";
  public fullName: string = "Steven's Baltoy DRI 83";
  public text: string = "Steven's Baltoy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
