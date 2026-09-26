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

export class Magnezone_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magneton";
  public hp: number = 170;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magnetic Repulsion", cost: [], damage: "50", text: "You may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)" },
      { name: "Thunder", cost: [], damage: "180", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "OBF";
  public name: string = "Magnezone";
  public fullName: string = "Magnezone OBF 65";
  public text: string = "Magnezone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
