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

export class AlolanMeowthSM51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nasty Plot", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for a card and put it into your hand. Then, shuffle your deck." },
      { name: "Scratch", cost: [], damage: "10", text: "" }
  ];
  public set: string = "PR-SM";
  public name: string = "Alolan Meowth";
  public fullName: string = "Alolan Meowth PR-SM SM51";
  public text: string = "Alolan Meowth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchTrainerToHand:1");
    }
    return state;
  }
}
