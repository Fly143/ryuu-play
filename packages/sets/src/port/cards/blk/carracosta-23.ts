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

export class Carracosta_23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tirtouga";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mighty Shell", powerType: PowerType.ABILITY, text: "Prevent all damage from and effects of attacks done to this Pokémon by your opponent's Pokémon that have any Special Energy attached.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Big Bite", cost: [], damage: "150", text: "During your opponent's next turn, the Defending Pokémon can't retreat." }
  ];
  public set: string = "BLK";
  public name: string = "Carracosta";
  public fullName: string = "Carracosta BLK 23";
  public text: string = "Carracosta";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
