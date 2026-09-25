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

export class Sprigatito_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gather Sunlight", cost: [], damage: "", text: "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Seed Bomb", cost: [], damage: "10", text: "" }
  ];
  public set: string = "PR-SV";
  public name: string = "Sprigatito";
  public fullName: string = "Sprigatito PR-SV 76";
  public text: string = "Sprigatito";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchEnergyToHand:2");
    }
    return state;
  }
}
