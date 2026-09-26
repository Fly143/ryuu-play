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

export class Durant_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mountain Munch", cost: [], damage: "10", text: "Discard the top card of your opponent's deck." },
      { name: "Scrape Down", cost: [], damage: "", text: "If this Pokémon has any damage counters on it, discard the top 4 cards of your opponent's deck." }
  ];
  public set: string = "GEN";
  public name: string = "Durant";
  public fullName: string = "Durant GEN 9";
  public text: string = "Durant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 4);
    }
    return state;
  }
}
