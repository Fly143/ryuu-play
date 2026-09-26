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

export class Golem_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Graveler";
  public hp: number = 120;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mend", cost: [], damage: "", text: "Search your discard pile for a Fighting Energy card and attach it to Golem. If you do, remove 2 damage counters from Golem." },
      { name: "Enraged Linear Attack", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each damage counter on Golem to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Rock Tumble", cost: [], damage: "70", text: "This attack's damage isn't affected by Resistance." }
  ];
  public set: string = "LM";
  public name: string = "Golem";
  public fullName: string = "Golem LM 6";
  public text: string = "Golem";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
