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

export class Chimecho_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Clear Tone", cost: [], damage: "", text: "Search your deck for up to 2 Special Energy cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Hang Down", cost: [], damage: "30", text: "" }
  ];
  public set: string = "FST";
  public name: string = "Chimecho";
  public fullName: string = "Chimecho FST 63";
  public text: string = "Chimecho";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:2");
    }
    return state;
  }
}
