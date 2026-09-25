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

export class Bombirdier_138 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Knickknack Carrying", cost: [], damage: "", text: "Search your deck for up to 3 Pokémon Tool cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Clutch", cost: [], damage: "60", text: "During your opponent's next turn, the Defending Pokémon can't retreat." }
  ];
  public set: string = "SVI";
  public name: string = "Bombirdier";
  public fullName: string = "Bombirdier SVI 138";
  public text: string = "Bombirdier";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:3");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
