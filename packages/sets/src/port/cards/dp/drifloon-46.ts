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

export class Drifloon_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Blowing Wind", cost: [], damage: "", text: "Flip a coin. If heads, put 1 of your Benched Pokémon and all cards attached to on top of your deck. Shuffle your deck afterward." },
      { name: "Ominous Wind", cost: [], damage: "10", text: "Flip a coin. If heads, the Defending Pokémon is now Confused and can't retreat during your opponent's next turn." }
  ];
  public set: string = "DP";
  public name: string = "Drifloon";
  public fullName: string = "Drifloon DP 46";
  public text: string = "Drifloon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
