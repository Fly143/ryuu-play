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

export class TeamAquaSSharpedo_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Carvanha";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Slow-Acting Poison", cost: [], damage: "20", text: "At the end of your opponent's next turn, the Defending Pokémon is now Poisoned." },
      { name: "Aqua Smash", cost: [], damage: "50+", text: "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Sharpedo";
  public fullName: string = "Team Aqua's Sharpedo MA 18";
  public text: string = "Team Aqua's Sharpedo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
