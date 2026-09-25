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

export class Tsareena_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Steenee";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Queenly Heel", cost: [], damage: "60", text: "During your opponent's next turn, Pokémon can't be played from your opponent's hand to evolve the Defending Pokémon." },
      { name: "Spinning Kick", cost: [], damage: "160", text: "This Pokémon also does 20 damage to itself." }
  ];
  public set: string = "OBF";
  public name: string = "Tsareena";
  public fullName: string = "Tsareena OBF 18";
  public text: string = "Tsareena";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
