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

export class Altaria_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swablu";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Midnight Eyes", cost: [], damage: "20", text: "The Defending Pokémon is now Asleep." },
      { name: "Perish Song", cost: [], damage: "", text: "If the Defending Pokémon is Asleep and was damaged or affected by Midnight Eyes during your last turn, the Defending Pokémon is Knocked Out." },
      { name: "Healing Song", cost: [], damage: "40", text: "Remove 1 damage counter from each of your Pokémon." }
  ];
  public set: string = "PL";
  public name: string = "Altaria";
  public fullName: string = "Altaria PL 18";
  public text: string = "Altaria";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
