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

export class Malamar_119 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Inkay";
  public hp: number = 100;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hypnotic Reign", cost: [], damage: "", text: "Your opponent reveals their hand. You may discard a Pokémon you find there and use one of that Pokémon's non-GX attacks as this attack." },
      { name: "Dark Pressure", cost: [], damage: "80", text: "Discard the top card of your opponent's deck." }
  ];
  public set: string = "UNM";
  public name: string = "Malamar";
  public fullName: string = "Malamar UNM 119";
  public text: string = "Malamar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
