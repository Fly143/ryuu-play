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

export class Mewtwo_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Absorption", cost: [], damage: "", text: "Search your discard pile for up to 2 Energy cards and attach them to Mewtwo." },
      { name: "Recover", cost: [], damage: "", text: "Discard a Psychic Energy attached to Mewtwo and remove 6 damage counters from Mewtwo." },
      { name: "Psyburn", cost: [], damage: "60", text: "" }
  ];
  public set: string = "LA";
  public name: string = "Mewtwo";
  public fullName: string = "Mewtwo LA 9";
  public text: string = "Mewtwo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
