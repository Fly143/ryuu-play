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

export class Roserade_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Roselia";
  public hp: number = 100;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Inviting Poison", cost: [], damage: "", text: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Poisoned." },
      { name: "Flower Tornado", cost: [], damage: "100", text: "Move any number of Grass Energy from your Pokémon to your other Pokémon in any way you like." }
  ];
  public set: string = "UPR";
  public name: string = "Roserade";
  public fullName: string = "Roserade UPR 5";
  public text: string = "Roserade";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
