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

export class RegigigasFB_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 4.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drain Punch", cost: [], damage: "30", text: "Remove from Regigigas FB a number of damage counters equal to the amount of Energy attached to the Defending Pokémon." },
      { name: "Rainbow Lariat", cost: [], damage: "20×", text: "Does 20 damage times the number of different types of Pokémon SP you have in play." }
  ];
  public set: string = "SV";
  public name: string = "Regigigas FB";
  public fullName: string = "Regigigas FB SV 9";
  public text: string = "Regigigas FB";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTimesPokemonInPlay(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
