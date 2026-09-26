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

export class Unfezant_145 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tranquill";
  public hp: number = 150;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Daunt", cost: [], damage: "50", text: "During your opponent's next turn, the Defending Pokémon's attacks do 50 less damage (before applying Weakness and Resistance)." },
      { name: "Air Slash", cost: [], damage: "150", text: "Discard an Energy from this Pokémon." }
  ];
  public set: string = "RCL";
  public name: string = "Unfezant";
  public fullName: string = "Unfezant RCL 145";
  public text: string = "Unfezant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
