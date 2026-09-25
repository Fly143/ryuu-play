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

export class Steelix_87 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Onix";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Perfect Metal", powerType: PowerType.ABILITY, text: "Steelix can't be affected by any Special Conditions", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Stream", cost: [], damage: "30", text: "Search your discard pile for an Energy card and attach it to Steelix." },
      { name: "Gaia Crush", cost: [], damage: "100", text: "You may discard any Stadium card in play." }
  ];
  public set: string = "UL";
  public name: string = "Steelix";
  public fullName: string = "Steelix UL 87";
  public text: string = "Steelix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "discardStadium");
    }
    return state;
  }
}
