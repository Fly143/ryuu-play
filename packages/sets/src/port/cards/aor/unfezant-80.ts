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

export class Unfezant_80 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tranquill";
  public hp: number = 130;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Quick Attack", cost: [], damage: "30+", text: "Flip a coin. If heads, this attack does 30 more damage." },
      { name: "Strong Winds", cost: [], damage: "", text: "Shuffle all cards attached to each player's Pokémon into that player's deck." }
  ];
  public set: string = "AOR";
  public name: string = "Unfezant";
  public fullName: string = "Unfezant AOR 80";
  public text: string = "Unfezant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    return state;
  }
}
