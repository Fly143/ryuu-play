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

export class Stoutland_156 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Herdier";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Odor Sleuth", cost: [], damage: "", text: "Flip 3 coins. Put a number of cards up to the number of heads from your discard pile into your hand." },
      { name: "Special Fang", cost: [], damage: "100+", text: "If this Pokémon has any Special Energy attached, this attack does 100 more damage." }
  ];
  public set: string = "WHT";
  public name: string = "Stoutland";
  public fullName: string = "Stoutland WHT 156";
  public text: string = "Stoutland";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* recoverFromDiscard */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 100, 1);
    }
    return state;
  }
}
