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

export class KyogreGroudonLEGEND_87 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mega Tidal Wave", cost: [], damage: "", text: "Discard the top 5 cards from your opponent's deck. This attack does 30 damage times the number of Energy cards you discarded to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Massive Eruption", cost: [], damage: "100×", text: "Discard the top 5 cards from your deck. This attack does 100 damage times the number of Energy cards you discarded." }
  ];
  public set: string = "UD";
  public name: string = "Kyogre & Groudon LEGEND";
  public fullName: string = "Kyogre & Groudon LEGEND UD 87";
  public text: string = "Kyogre & Groudon LEGEND";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
