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

export class Relicanth_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fossil Finding", cost: [], damage: "", text: "Shuffle up to 4 in any combination of Unidentified Fossil and Rare Fossil cards from your discard pile into your deck." },
      { name: "Water Pulse", cost: [], damage: "30", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "PGO";
  public name: string = "Relicanth";
  public fullName: string = "Relicanth PGO 44";
  public text: string = "Relicanth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
