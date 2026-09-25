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

export class Sealeo_77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spheal";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Find Ice", cost: [], damage: "", text: "Search your deck for up to 2 Water Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward." },
      { name: "Sheer Cold", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn." }
  ];
  public set: string = "RR";
  public name: string = "Sealeo";
  public fullName: string = "Sealeo RR 77";
  public text: string = "Sealeo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackOpponentNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
