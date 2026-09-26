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

export class SabrinaSPorygon_98 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sharp Point", cost: [], damage: "10", text: "" },
      { name: "Barrier Attack", cost: [], damage: "20", text: "All damage done by attacks to Sabrina's Porygon during your opponent's next turn is reduced by 10 (after applying Weakness and Resistance)." }
  ];
  public set: string = "G2";
  public name: string = "Sabrina's Porygon";
  public fullName: string = "Sabrina's Porygon G2 98";
  public text: string = "Sabrina's Porygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
