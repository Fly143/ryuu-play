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

export class Shiftry_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nuzleaf";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wicked Wind", cost: [], damage: "40", text: "Until the end of your opponent's next turn, each Stadium or Pokémon Tool card in play has no effect. (This includes cards that come into play on that turn.)" },
      { name: "Extrasensory", cost: [], damage: "60+", text: "If you have the same number of cards in your hand as your opponent, this attack does 60 more damage." }
  ];
  public set: string = "STS";
  public name: string = "Shiftry";
  public fullName: string = "Shiftry STS 11";
  public text: string = "Shiftry";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 1);
    }
    return state;
  }
}
