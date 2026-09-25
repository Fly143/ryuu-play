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

export class OriginFormePalkiaV_167 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rule the Region", cost: [], damage: "", text: "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Hydro Break", cost: [], damage: "200", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "BRS";
  public name: string = "Origin Forme Palkia V";
  public fullName: string = "Origin Forme Palkia V BRS 167";
  public text: string = "Origin Forme Palkia V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
