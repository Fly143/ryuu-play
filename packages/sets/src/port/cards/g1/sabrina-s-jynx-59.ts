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

export class SabrinaSJynx_59 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Good Night", cost: [], damage: "10", text: "The Defending Pokémon is now Asleep." },
      { name: "Good Morning", cost: [], damage: "20", text: "If the Defending Pokémon was Asleep, it is no longer Asleep." }
  ];
  public set: string = "G1";
  public name: string = "Sabrina's Jynx";
  public fullName: string = "Sabrina's Jynx G1 59";
  public text: string = "Sabrina's Jynx";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
