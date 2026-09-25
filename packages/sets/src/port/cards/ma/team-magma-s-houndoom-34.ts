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

export class TeamMagmaSHoundoom_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Magma's Houndour";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Target Scorch", cost: [], damage: "30", text: "If the Defending Pokémon has Team Aqua in its name, the Defending Pokémon is now Burned." },
      { name: "Damage Burn", cost: [], damage: "40+", text: "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 20 more damage." }
  ];
  public set: string = "MA";
  public name: string = "Team Magma's Houndoom";
  public fullName: string = "Team Magma's Houndoom MA 34";
  public text: string = "Team Magma's Houndoom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
