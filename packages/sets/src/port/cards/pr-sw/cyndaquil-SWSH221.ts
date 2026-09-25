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

export class CyndaquilSWSH221 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Charge Energy", cost: [], damage: "", text: "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Live Coal", cost: [], damage: "10", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Cyndaquil";
  public fullName: string = "Cyndaquil PR-SW SWSH221";
  public text: string = "Cyndaquil";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchEnergyToHand:2");
    }
    return state;
  }
}
