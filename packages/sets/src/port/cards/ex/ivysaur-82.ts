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

export class Ivysaur_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bulbasaur";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sleep Seed", cost: [], damage: "20", text: "The Defending Pokémon is now Asleep." },
      { name: "Vine Whip", cost: [], damage: "40", text: "" }
  ];
  public set: string = "EX";
  public name: string = "Ivysaur";
  public fullName: string = "Ivysaur EX 82";
  public text: string = "Ivysaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
