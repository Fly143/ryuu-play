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

export class OmastarV_174 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Primal Guidance", cost: [], damage: "", text: "Search your deck for up to 2 Pokémon that evolve from an Item card that has \"Fossil\" in its name and put them onto your Bench. Then, shuffle your deck." },
      { name: "Tentacle Lock", cost: [], damage: "110", text: "If the Defending Pokémon is an Evolution Pokémon, it can't attack during your opponent's next turn." }
  ];
  public set: string = "PGO";
  public name: string = "Omastar V";
  public fullName: string = "Omastar V PGO 174";
  public text: string = "Omastar V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
