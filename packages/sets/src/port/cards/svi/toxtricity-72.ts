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

export class Toxtricity_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Toxel";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Yank Away", cost: [], damage: "", text: "Choose 2 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck." },
      { name: "Thunder", cost: [], damage: "120", text: "This Pokémon also does 20 damage to itself." }
  ];
  public set: string = "SVI";
  public name: string = "Toxtricity";
  public fullName: string = "Toxtricity SVI 72";
  public text: string = "Toxtricity";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
