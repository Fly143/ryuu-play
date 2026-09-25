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

export class Octillery_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Remoraid";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Jet of Ink", cost: [], damage: "30", text: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips 2 coins. If either of them is tails, that attack doesn't happen." },
      { name: "Tantrum", cost: [], damage: "120", text: "This Pokémon is now Confused." }
  ];
  public set: string = "CRI";
  public name: string = "Octillery";
  public fullName: string = "Octillery CRI 17";
  public text: string = "Octillery";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
