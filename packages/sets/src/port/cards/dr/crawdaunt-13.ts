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

export class Crawdaunt_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Corphish";
  public hp: number = 80;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Poison Claws", cost: [], damage: "10", text: "Flip a coin. If heads, the Defending Pokémon is now Poisoned." },
      { name: "Rend", cost: [], damage: "30+", text: "If the Defending Pokémon has any damage counters on it, this attack does 30 damage plus 30 more damage." }
  ];
  public set: string = "DR";
  public name: string = "Crawdaunt";
  public fullName: string = "Crawdaunt DR 13";
  public text: string = "Crawdaunt";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
