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

export class Hariyama_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Makuhita";
  public hp: number = 110;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Push Out", cost: [], damage: "50", text: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon." },
      { name: "Vortex Chop", cost: [], damage: "60", text: "If the Defending Pokémon has any Resistance, this attack's base damage is 120 instead of 60." }
  ];
  public set: string = "AR";
  public name: string = "Hariyama";
  public fullName: string = "Hariyama AR 20";
  public text: string = "Hariyama";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
