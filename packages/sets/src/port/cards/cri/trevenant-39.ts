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

export class Trevenant_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Phantump";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cursed Roots", cost: [], damage: "30", text: "During your opponent's next turn, Energy can't be attached from your opponent's hand to the Defending Pokémon." },
      { name: "Overwhelming Pain", cost: [], damage: "60+", text: "This attack does 10 more damage for each damage counter on all of your opponent's Pokémon." }
  ];
  public set: string = "CRI";
  public name: string = "Trevenant";
  public fullName: string = "Trevenant CRI 39";
  public text: string = "Trevenant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
