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

export class SabrinaSPsyduck_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scratch", cost: [], damage: "10", text: "" },
      { name: "Random ESP", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, this attack does no damage and Sabrina's Psyduck is now Confused." }
  ];
  public set: string = "G2";
  public name: string = "Sabrina's Psyduck";
  public fullName: string = "Sabrina's Psyduck G2 99";
  public text: string = "Sabrina's Psyduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
