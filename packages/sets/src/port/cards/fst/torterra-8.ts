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

export class Torterra_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grotle";
  public hp: number = 190;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Evopress", cost: [], damage: "50×", text: "This attack does 50 damage for each of your Evolution Pokémon in play." },
      { name: "Hammer In", cost: [], damage: "160", text: "" }
  ];
  public set: string = "FST";
  public name: string = "Torterra";
  public fullName: string = "Torterra FST 8";
  public text: string = "Torterra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerOwnBench(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
