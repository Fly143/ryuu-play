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

export class Froslass_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snorunt";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Frosty Jail", cost: [], damage: "20+", text: "If you played Candice from your hand during this turn, this attack does 90 more damage, and your opponent's Active Pokémon is now Paralyzed." },
      { name: "Frost Breath", cost: [], damage: "60", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Froslass";
  public fullName: string = "Froslass PGO 43";
  public text: string = "Froslass";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
