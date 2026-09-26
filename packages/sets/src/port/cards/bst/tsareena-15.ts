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

export class Tsareena_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Steenee";
  public hp: number = 140;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tread On", cost: [], damage: "10+", text: "This attack does 50 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." },
      { name: "Solar Beam", cost: [], damage: "120", text: "" }
  ];
  public set: string = "BST";
  public name: string = "Tsareena";
  public fullName: string = "Tsareena BST 15";
  public text: string = "Tsareena";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 0);
    }
    return state;
  }
}
