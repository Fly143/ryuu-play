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

export class CarnivineGDP42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Power Whip", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each Energy attached to Carnivine G to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Grass Knot", cost: [], damage: "20+", text: "Does 20 damage plus 10 more damage for each Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost)." }
  ];
  public set: string = "PR-DPP";
  public name: string = "Carnivine G";
  public fullName: string = "Carnivine G PR-DPP DP42";
  public text: string = "Carnivine G";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
