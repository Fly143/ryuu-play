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

export class Hypno_232 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drowzee";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Binding Aura", powerType: PowerType.ABILITY, text: "Your opponent can't play any Basic Pokémon or Evolution cards from his or her hand to evolve an Active Pokémon and can't attach any Energy cards from his or her hand to an Asleep Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sleep Inducer", cost: [], damage: "", text: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Asleep." },
      { name: "Psyshot", cost: [], damage: "40", text: "" }
  ];
  public set: string = "DS";
  public name: string = "Hypno";
  public fullName: string = "Hypno DS 23";
  public text: string = "Hypno";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
