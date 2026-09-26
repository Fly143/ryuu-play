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

export class Orbeetle_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dottler";
  public hp: number = 110;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Evomancy", cost: [], damage: "", text: "For each Energy attached to this Pokémon, search your deck for a Stage 2 Pokémon, except Orbeetle, and put it onto your Bench. Then, shuffle your deck." },
      { name: "Zen Headbutt", cost: [], damage: "120", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Orbeetle";
  public fullName: string = "Orbeetle SHF 65";
  public text: string = "Orbeetle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
