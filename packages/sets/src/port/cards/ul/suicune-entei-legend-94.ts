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

export class SuicuneEnteiLEGEND_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Torrent Blade", cost: [], damage: "", text: "Return 2 Water Energy attached to Suicune & Entei LEGEND to your hand. Choose 1 of your opponent's Benched Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.)" },
      { name: "Bursting Inferno", cost: [], damage: "80", text: "The Defending Pokémon is now Burned." }
  ];
  public set: string = "UL";
  public name: string = "Suicune & Entei LEGEND";
  public fullName: string = "Suicune & Entei LEGEND UL 94";
  public text: string = "Suicune & Entei LEGEND";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
