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

export class Gengar_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Haunter";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Life Drain", cost: [], damage: "", text: "Flip a coin. If heads, put damage counters on the Defending Pokémon until it is 10 HP away from being Knocked Out." },
      { name: "Shadow Dance", cost: [], damage: "", text: "Put 4 damage counters on your opponent's Pokémon in any way you like. Then, switch Gengar with 1 of your Benched Pokémon." }
  ];
  public set: string = "DP";
  public name: string = "Gengar";
  public fullName: string = "Gengar DP 27";
  public text: string = "Gengar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
