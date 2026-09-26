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

export class VileplumeH31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gloom";
  public hp: number = 100;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Poison Scent", cost: [], damage: "", text: "Flip a coin. If heads, the Defending Pokémon is now Poisoned and Confused. If tails, the Defending Pokémon is now Poisoned and Asleep." },
      { name: "Addictive Pollen", cost: [], damage: "40", text: "Flip a coin. If heads, your opponent can't play Supporter cards during his or her next turn." }
  ];
  public set: string = "AQ";
  public name: string = "Vileplume";
  public fullName: string = "Vileplume AQ H31";
  public text: string = "Vileplume";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
