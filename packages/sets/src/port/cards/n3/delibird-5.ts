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

export class Delibird_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Present", cost: [], damage: "", text: "Flip 3 coins. If exactly 1 is heads, this attack does 40 damage. If exactly 2 are heads, remove 3 damage counters from the Defending Pokémon. If the Defending Pokémon has fewer damage counters than that, remove all of them. If all 3 are heads, this attack does 60 damage. If all 3 are tails, remove all damage counters from the Defending Pokémon." }
  ];
  public set: string = "N3";
  public name: string = "Delibird";
  public fullName: string = "Delibird N3 5";
  public text: string = "Delibird";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
