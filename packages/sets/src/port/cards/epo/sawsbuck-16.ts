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

export class Sawsbuck_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Deerling";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Push Down", cost: [], damage: "30", text: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon." },
      { name: "Take Down", cost: [], damage: "60", text: "This Pokémon does 20 damage to itself." }
  ];
  public set: string = "EPO";
  public name: string = "Sawsbuck";
  public fullName: string = "Sawsbuck EPO 16";
  public text: string = "Sawsbuck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
