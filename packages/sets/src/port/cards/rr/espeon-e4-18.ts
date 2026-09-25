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

export class EspeonE4_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hypnosis", cost: [], damage: "", text: "The Defending Pokémon is now Asleep." },
      { name: "Psywave", cost: [], damage: "20+", text: "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon." }
  ];
  public set: string = "RR";
  public name: string = "Espeon E4";
  public fullName: string = "Espeon E4 RR 18";
  public text: string = "Espeon E4";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
