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

export class ChiYuEx_241 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Jealously Singe", cost: [], damage: "", text: "Discard the top 2 cards of your opponent's deck." },
      { name: "Flame Surge", cost: [], damage: "100", text: "Choose up to 3 of your Benched Pokémon. For each of those Pokémon, search your deck for a Basic Fire Energy card and attach it to that Pokémon. Then, shuffle your deck." }
  ];
  public set: string = "PAF";
  public name: string = "Chi-Yu ex";
  public fullName: string = "Chi-Yu ex PAF 241";
  public text: string = "Chi-Yu ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
