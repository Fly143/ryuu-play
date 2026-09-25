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

export class Persian_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meowth";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scratch and Draw", cost: [], damage: "30", text: "If any Stadium card with Holon in its name is in play, draw 3 cards." },
      { name: "Deceive", cost: [], damage: "", text: "Your opponent chooses 1 of his or her Pokémon. Put 4 damage counters on that Pokémon." }
  ];
  public set: string = "HP";
  public name: string = "Persian δ";
  public fullName: string = "Persian δ HP 48";
  public text: string = "Persian δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
