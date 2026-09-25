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

export class DragapultEx_165 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drakloak";
  public hp: number = 320;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Jet Headbutt", cost: [], damage: "70", text: "" },
      { name: "Phantom Dive", cost: [], damage: "200", text: "Put 6 damage counters on your opponent's Benched Pokémon in any way you like." }
  ];
  public set: string = "PRE";
  public name: string = "Dragapult ex";
  public fullName: string = "Dragapult ex PRE 165";
  public text: string = "Dragapult ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
