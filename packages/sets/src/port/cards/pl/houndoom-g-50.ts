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

export class HoundoomG_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Black Cry", cost: [], damage: "20", text: "The Defending Pokémon can't retreat or use any Poké-Powers during your opponent's next turn." },
      { name: "Dark Slash", cost: [], damage: "40+", text: "You may discard a Darkness Energy attached to Houndoom G. If you do, this attack does 40 damage plus 20 more damage." }
  ];
  public set: string = "PL";
  public name: string = "Houndoom G";
  public fullName: string = "Houndoom G PL 50";
  public text: string = "Houndoom G";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
