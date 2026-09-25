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

export class Kyurem_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Call Forth Cold", cost: [], damage: "", text: "Search your deck for a Water Energy card and attach it to this Pokémon. Then, shuffle your deck." },
      { name: "Hail Prison", cost: [], damage: "110", text: "Discard 2 Water Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed." }
  ];
  public set: string = "UNM";
  public name: string = "Kyurem";
  public fullName: string = "Kyurem UNM 50";
  public text: string = "Kyurem";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
