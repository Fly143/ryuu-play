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

export class Solrock_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sunbeam", powerType: PowerType.ABILITY, text: "The maximum HP for each Lunatone you have in play is now 80.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Scorching Light", cost: [], damage: "", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Burned." },
      { name: "Reflected Beam", cost: [], damage: "", text: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon for each Lunatone you have in play. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "DX";
  public name: string = "Solrock";
  public fullName: string = "Solrock DX 47";
  public text: string = "Solrock";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
