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

export class Snorlax_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gormandizer", cost: [], damage: "", text: "Flip a coin until you get tails. Search your deck for an amount of Basic Energy up to the number of heads and attach it to this Pokémon. Then, shuffle your deck." },
      { name: "Collapse", cost: [], damage: "160", text: "This Pokémon is now Asleep." }
  ];
  public set: string = "POR";
  public name: string = "Snorlax";
  public fullName: string = "Snorlax POR 63";
  public text: string = "Snorlax";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
