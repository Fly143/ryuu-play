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

export class PikachuEx_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Zip-Zap Frenzy", cost: [], damage: "", text: "You may attach any number of Basic Energy cards from your hand to your Pokémon in any way you like." },
      { name: "Thunder", cost: [], damage: "200", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "30C";
  public name: string = "Pikachu ex";
  public fullName: string = "Pikachu ex 30C 54";
  public text: string = "Pikachu ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
