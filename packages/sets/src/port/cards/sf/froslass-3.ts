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

export class Froslass_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snorunt";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Destiny Bond", cost: [], damage: "", text: "Discard a Psychic Energy attached to Froslass. During your opponent's next turn, if Froslass would be Knocked Out by damage from an attack, the Attacking Pokémon is Knocked Out." },
      { name: "Icy Breath", cost: [], damage: "40", text: "The Defending Pokémon is now Asleep. Put 1 damage counter on each of your opponent's Benched Pokémon." }
  ];
  public set: string = "SF";
  public name: string = "Froslass";
  public fullName: string = "Froslass SF 3";
  public text: string = "Froslass";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
