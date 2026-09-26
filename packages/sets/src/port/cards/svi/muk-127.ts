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

export class Muk_127 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grimer";
  public hp: number = 140;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Poison Sacs", powerType: PowerType.ABILITY, text: "Your opponent's Poisoned Pokémon don't recover from that Special Condition when they evolve or devolve.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Toxic Strike", cost: [], damage: "100", text: "Your opponent's Active Pokémon is now Poisoned." }
  ];
  public set: string = "SVI";
  public name: string = "Muk";
  public fullName: string = "Muk SVI 127";
  public text: string = "Muk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
