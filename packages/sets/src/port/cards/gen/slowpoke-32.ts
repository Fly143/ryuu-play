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

export class Slowpoke_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spacing Out", cost: [], damage: "", text: "Flip a coin. If heads, heal 10 damage from this Pokémon." },
      { name: "Scavenge", cost: [], damage: "", text: "Discard a Psychic Energy attached to this Pokémon. If you do, put an Item card from your discard pile into your hand." }
  ];
  public set: string = "GEN";
  public name: string = "Slowpoke";
  public fullName: string = "Slowpoke GEN 32";
  public text: string = "Slowpoke";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* recoverFromDiscard */ state;
    }
    return state;
  }
}
