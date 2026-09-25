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

export class Beldum_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Calculate", cost: [], damage: "", text: "Look at the top 4 cards of your deck and put them back on top of your deck in any order." },
      { name: "Psypunch", cost: [], damage: "20", text: "" }
  ];
  public set: string = "FLF";
  public name: string = "Beldum";
  public fullName: string = "Beldum FLF 50";
  public text: string = "Beldum";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "pokedex");
    }
    return state;
  }
}
