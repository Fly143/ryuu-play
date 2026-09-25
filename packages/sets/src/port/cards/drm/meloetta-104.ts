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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Meloetta_104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sing", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Asleep." },
      { name: "Miracle Harmony", cost: [], damage: "", text: "Flip a coin for each of your Pokémon in play that has the Sing attack. This attack does 10 damage for each heads to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "DRM";
  public name: string = "Meloetta";
  public fullName: string = "Meloetta DRM 104";
  public text: string = "Meloetta";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 10);
    }
    return state;
  }
}
