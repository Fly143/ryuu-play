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

export class Articuno_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Find Ice", cost: [], damage: "", text: "Search your deck for up to 3 Water Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward." },
      { name: "Freezing Wind", cost: [], damage: "100", text: "" }
  ];
  public set: string = "GEN";
  public name: string = "Articuno";
  public fullName: string = "Articuno GEN 25";
  public text: string = "Articuno";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:3");
    }
    return state;
  }
}
