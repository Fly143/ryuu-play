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

export class GalarianDarmanitan_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Darumaka";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Powder Snow", cost: [], damage: "30", text: "Your opponent's Active Pokémon is now Asleep." },
      { name: "Daruma Headbutt", cost: [], damage: "130", text: "If this Pokémon has any damage counters on it, this attack can be used for Water." }
  ];
  public set: string = "EVS";
  public name: string = "Galarian Darmanitan";
  public fullName: string = "Galarian Darmanitan EVS 72";
  public text: string = "Galarian Darmanitan";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
