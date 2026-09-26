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

export class Carnivine_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stretch Vine", cost: [], damage: "", text: "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Absorb", cost: [], damage: "20", text: "Remove 2 damage counters from Carnivine." },
      { name: "Vine Extract", cost: [], damage: "30", text: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Burned and Poisoned." }
  ];
  public set: string = "PL";
  public name: string = "Carnivine";
  public fullName: string = "Carnivine PL 43";
  public text: string = "Carnivine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
