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

export class Doublade_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Honedge";
  public hp: number = 80;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Curse of the Blade", cost: [], damage: "", text: "Put 3 damage counters on each of your opponent's Pokémon that has a Pokémon Tool card attached to it." }
  ];
  public set: string = "FLI";
  public name: string = "Doublade";
  public fullName: string = "Doublade FLI 48";
  public text: string = "Doublade";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersEachOpponent(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
