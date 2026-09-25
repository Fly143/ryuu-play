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

export class Claydol_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Baltoy";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Antique Magic", cost: [], damage: "", text: "Put 3 damage counters on any Pokémon (both yours and your opponent's) in any way you like." },
      { name: "Synchro Attack", cost: [], damage: "30", text: "If the Defending Pokémon has the same remaining HP as Claydol, this attack's base damage is 90 instead of 30." }
  ];
  public set: string = "SV";
  public name: string = "Claydol";
  public fullName: string = "Claydol SV 22";
  public text: string = "Claydol";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putDamageCountersDefending(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
