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

export class MegaAbsolEx_161 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 280;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Terminal Period", cost: [], damage: "", text: "If your opponent's Active Pokémon has exactly 6 damage counters on it, that Pokémon is Knocked Out." },
      { name: "Claw of Darkness", cost: [], damage: "200", text: "Your opponent reveals their hand, and you discard a card you find there." }
  ];
  public set: string = "MEG";
  public name: string = "Mega Absol ex";
  public fullName: string = "Mega Absol ex MEG 161";
  public text: string = "Mega Absol ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
