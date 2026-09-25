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

export class Mandibuzz_932 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vullaby";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Trash Crash", cost: [], damage: "", text: "Discard an Item card from your hand. If you do, this attack does 60 damage to 1 of your opponent's Pokémon. This damage isn't affected by Weakness or Resistance." },
      { name: "Brave Bird", cost: [], damage: "120", text: "This Pokémon does 30 damage to itself." }
  ];
  public set: string = "UNB";
  public name: string = "Mandibuzz";
  public fullName: string = "Mandibuzz UNB 93";
  public text: string = "Mandibuzz";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 60);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
