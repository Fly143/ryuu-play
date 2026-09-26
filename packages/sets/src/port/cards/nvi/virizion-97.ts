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

export class Virizion_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Double Draw", cost: [], damage: "", text: "Draw 2 cards." },
      { name: "Leaf Wallop", cost: [], damage: "40", text: "During your next turn, this Pokémon's Leaf Wallop attack does 40 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "NVI";
  public name: string = "Virizion";
  public fullName: string = "Virizion NVI 97";
  public text: string = "Virizion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
