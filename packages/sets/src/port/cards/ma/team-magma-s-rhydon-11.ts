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

export class TeamMagmaSRhydon_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Magma's Rhyhorn";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magma Jab", cost: [], damage: "20", text: "This attack's damage is not affected by Resistance." },
      { name: "Shoot Down", cost: [], damage: "50", text: "If the Defending Pokémon has Team Aqua in its name, the Defending Pokémon is now Confused." }
  ];
  public set: string = "MA";
  public name: string = "Team Magma's Rhydon";
  public fullName: string = "Team Magma's Rhydon MA 11";
  public text: string = "Team Magma's Rhydon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
