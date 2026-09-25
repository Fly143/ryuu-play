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

export class Aggron_80 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lairon";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Toppling Wind", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard the top 3 cards of your opponent's deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Giga Horn", cost: [], damage: "90", text: "Flip 2 coins. If both of them are tails, this attack does nothing." }
  ];
  public set: string = "BCR";
  public name: string = "Aggron";
  public fullName: string = "Aggron BCR 80";
  public text: string = "Aggron";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
