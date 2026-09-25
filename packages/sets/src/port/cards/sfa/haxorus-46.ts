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

export class Haxorus_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fraxure";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bring Down the Axe", cost: [], damage: "", text: "If your opponent's Active Pokémon has any Special Energy attached, it is Knocked Out." },
      { name: "Dragon Pulse", cost: [], damage: "230", text: "Discard the top 3 cards of your deck." }
  ];
  public set: string = "SFA";
  public name: string = "Haxorus";
  public fullName: string = "Haxorus SFA 46";
  public text: string = "Haxorus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
