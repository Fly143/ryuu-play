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

export class Phantump_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dark Guidance", cost: [], damage: "", text: "Put a Basic Pokémon from your discard pile onto your Bench." },
      { name: "Seed Bomb", cost: [], damage: "30", text: "" }
  ];
  public set: string = "RCL";
  public name: string = "Phantump";
  public fullName: string = "Phantump RCL 14";
  public text: string = "Phantump";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscardToBench");
    }
    return state;
  }
}
