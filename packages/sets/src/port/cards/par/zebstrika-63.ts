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

export class Zebstrika_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Blitzle";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Burst of Braying", cost: [], damage: "", text: "Choose Basic Lightning Energy cards from your discard pile up to the number of Prize cards your opponent has taken and attach them to your Pokémon in any way you like." },
      { name: "Thunder", cost: [], damage: "150", text: "This Pokémon also does 50 damage to itself." }
  ];
  public set: string = "PAR";
  public name: string = "Zebstrika";
  public fullName: string = "Zebstrika PAR 63";
  public text: string = "Zebstrika";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
