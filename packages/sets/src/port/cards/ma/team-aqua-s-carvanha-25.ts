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

export class TeamAquaSCarvanha_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Lift", powerType: PowerType.ABILITY, text: "If Team Aqua's Carvanha has any Darkness Energy attached to it, the Retreat Cost for Team Aqua's Carvanha is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slow-Acting Poison", cost: [], damage: "20", text: "At the end of your opponent's next turn, the Defending Pokémon is now Poisoned." }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Carvanha";
  public fullName: string = "Team Aqua's Carvanha MA 25";
  public text: string = "Team Aqua's Carvanha";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
