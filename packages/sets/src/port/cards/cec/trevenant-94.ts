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

export class Trevenant_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Phantump";
  public hp: number = 120;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Perplexing Forest", cost: [], damage: "20", text: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon." },
      { name: "Shadow Impact", cost: [], damage: "120", text: "Put 4 damage counters on 1 of your Pokémon." }
  ];
  public set: string = "CEC";
  public name: string = "Trevenant";
  public fullName: string = "Trevenant CEC 94";
  public text: string = "Trevenant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
