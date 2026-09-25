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

export class PorygonHGSS22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stiffen", cost: [], damage: "", text: "During your opponent's next turn, any damage done to Porygon by attacks is reduced by 20 (after applying Weakness and Resistance)." },
      { name: "Version Update", cost: [], damage: "", text: "Search your deck for Porygon2, show it to your opponent, and put it into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "PR-HS";
  public name: string = "Porygon";
  public fullName: string = "Porygon PR-HS HGSS22";
  public text: string = "Porygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
