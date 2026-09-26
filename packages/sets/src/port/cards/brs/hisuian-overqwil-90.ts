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

export class HisuianOverqwil_90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hisuian Qwilfish";
  public hp: number = 130;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tormenting Poison", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 5 damage counters on that Pokémon instead of 1." },
      { name: "Pinning", cost: [], damage: "50", text: "During your opponent's next turn, the Defending Pokémon can't retreat." }
  ];
  public set: string = "BRS";
  public name: string = "Hisuian Overqwil";
  public fullName: string = "Hisuian Overqwil BRS 90";
  public text: string = "Hisuian Overqwil";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
