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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LuxrayV_168 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fang Snipe", cost: [], damage: "30", text: "Your opponent reveals their hand. Discard a Trainer card you find there." },
      { name: "Radiating Pulse", cost: [], damage: "120", text: "Discard 2 Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed." }
  ];
  public set: string = "BRS";
  public name: string = "Luxray V";
  public fullName: string = "Luxray V BRS 168";
  public text: string = "Luxray V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
