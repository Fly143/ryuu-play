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

export class LatiasSM135 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hypnoblast", cost: [], damage: "30", text: "Your opponent's Active Pokémon is now Asleep." },
      { name: "Mist Ball", cost: [], damage: "110", text: "Flip a coin. If tails, discard a Fire Energy and a Psychic Energy from this Pokémon." }
  ];
  public set: string = "PR-SM";
  public name: string = "Latias";
  public fullName: string = "Latias PR-SM SM135";
  public text: string = "Latias";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
