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

export class Relicanth_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Prehistoric Wisdom", cost: [], damage: "", text: "Choose a card from your hand and put it in the Lost Zone. Then, draw 3 cards." },
      { name: "Granite Head", cost: [], damage: "30", text: "During your opponent's next turn, any damage done to Relicanth by attacks is reduced by 30 (after applying Weakness and Resistance)." }
  ];
  public set: string = "CL";
  public name: string = "Relicanth";
  public fullName: string = "Relicanth CL 69";
  public text: string = "Relicanth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
