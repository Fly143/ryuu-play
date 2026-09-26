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

export class Krookodile_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Krokorok";
  public hp: number = 140;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bother", cost: [], damage: "50", text: "Flip a coin. If heads, your opponent can't play any Supporter cards from his or her hand during his or her next turn." },
      { name: "Knock Back", cost: [], damage: "80", text: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon." }
  ];
  public set: string = "XY";
  public name: string = "Krookodile";
  public fullName: string = "Krookodile XY 71";
  public text: string = "Krookodile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
