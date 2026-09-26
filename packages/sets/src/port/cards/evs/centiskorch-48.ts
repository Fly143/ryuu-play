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

export class Centiskorch_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sizzlipede";
  public hp: number = 130;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Coil", cost: [], damage: "30", text: "During your next turn, this Pokémon's attacks do 90 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)." },
      { name: "Burning Train", cost: [], damage: "120", text: "" }
  ];
  public set: string = "EVS";
  public name: string = "Centiskorch";
  public fullName: string = "Centiskorch EVS 48";
  public text: string = "Centiskorch";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 90);
    }
    return state;
  }
}
