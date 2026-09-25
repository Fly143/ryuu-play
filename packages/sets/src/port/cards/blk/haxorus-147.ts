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

export class Haxorus_147 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fraxure";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cross-Cut", cost: [], damage: "80+", text: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 80 more damage." },
      { name: "Axe Blast", cost: [], damage: "", text: "If your opponent's Active Pokémon is a Basic Pokémon, it is Knocked Out." }
  ];
  public set: string = "BLK";
  public name: string = "Haxorus";
  public fullName: string = "Haxorus BLK 147";
  public text: string = "Haxorus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    return state;
  }
}
