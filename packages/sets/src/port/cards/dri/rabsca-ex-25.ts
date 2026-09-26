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

export class RabscaEx_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rellor";
  public hp: number = 250;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Upside-Down Draw", cost: [], damage: "", text: "Draw 3 cards from the bottom of your deck." },
      { name: "Psychic", cost: [], damage: "20+", text: "This attack does 90 more damage for each Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "DRI";
  public name: string = "Rabsca ex";
  public fullName: string = "Rabsca ex DRI 25";
  public text: string = "Rabsca ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 0);
    }
    return state;
  }
}
