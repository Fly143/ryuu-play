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

export class Gimmighoul_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Minor Errand-Running", cost: [], damage: "", text: "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Tackle", cost: [], damage: "50", text: "" }
  ];
  public set: string = "SSP";
  public name: string = "Gimmighoul";
  public fullName: string = "Gimmighoul SSP 97";
  public text: string = "Gimmighoul";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchEnergyToHand:2");
    }
    return state;
  }
}
