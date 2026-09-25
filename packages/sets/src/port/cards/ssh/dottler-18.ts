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

export class Dottler_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Blipbug";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Reflect", cost: [], damage: "", text: "During your opponent's next turn, this Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance)." },
      { name: "Ram", cost: [], damage: "30", text: "" }
  ];
  public set: string = "SSH";
  public name: string = "Dottler";
  public fullName: string = "Dottler SSH 18";
  public text: string = "Dottler";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
