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

export class VikavoltV_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Paralyzing Bolt", cost: [], damage: "50", text: "During your opponent's next turn, they can't play any Item cards from their hand." },
      { name: "Super Zap Cannon", cost: [], damage: "190", text: "Discard 2 Energy from this Pokémon." }
  ];
  public set: string = "DAA";
  public name: string = "Vikavolt V";
  public fullName: string = "Vikavolt V DAA 60";
  public text: string = "Vikavolt V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
