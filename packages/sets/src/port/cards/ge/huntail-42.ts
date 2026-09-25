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

export class Huntail_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clamperl";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scary Face", cost: [], damage: "", text: "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn." },
      { name: "Threaten and Drop", cost: [], damage: "30+", text: "If Huntail has any Darkness Energy attached to it, this attack does 30 damage plus 20 more damage and discard a Special Energy card, if any, attached to the Defending Pokémon." }
  ];
  public set: string = "GE";
  public name: string = "Huntail";
  public fullName: string = "Huntail GE 42";
  public text: string = "Huntail";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackOpponentNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
