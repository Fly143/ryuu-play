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

export class Pelipper_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wingull";
  public hp: number = 70;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stockpile", cost: [], damage: "", text: "During your next turn, Spit Up's base damage is 70 instead of 30, and Swallow's base damage is 60 instead of 20." },
      { name: "Spit Up", cost: [], damage: "30", text: "" },
      { name: "Swallow", cost: [], damage: "20", text: "After your attack, remove from Pelipper the number of damage counters equal to the damage you did to the Defending Pokémon. If Pelipper has fewer damage counters than that, remove all of them." }
  ];
  public set: string = "RS";
  public name: string = "Pelipper";
  public fullName: string = "Pelipper RS 19";
  public text: string = "Pelipper";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.healSelfAfterAttack(this, store, state, effect).use(effect, 0);
    }
    return state;
  }
}
