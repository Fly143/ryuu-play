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

export class TeamMagmaSAggron_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Magma's Lairon";
  public hp: number = 120;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Crush", cost: [], damage: "30×", text: "Flip a coin for each Energy attached to Team Magma's Aggron. This attack does 30 damage times the number of heads." },
      { name: "Land Stream", cost: [], damage: "50+", text: "You may discard any number of basic Energy cards attached to Team Magma's Aggron. If you do, this attack does 50 damage plus 20 more damage for each basic Energy card you discarded." }
  ];
  public set: string = "MA";
  public name: string = "Team Magma's Aggron";
  public fullName: string = "Team Magma's Aggron MA 7";
  public text: string = "Team Magma's Aggron";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
