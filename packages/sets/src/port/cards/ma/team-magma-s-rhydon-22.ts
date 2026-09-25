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

export class TeamMagmaSRhydon_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Magma's Rhyhorn";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Second Strike", cost: [], damage: "20+", text: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 20 damage plus 20 more damage." },
      { name: "Land Crush", cost: [], damage: "60", text: "Flip a coin. If tails, discard an Energy card attached to Team Magma's Rhydon." }
  ];
  public set: string = "MA";
  public name: string = "Team Magma's Rhydon";
  public fullName: string = "Team Magma's Rhydon MA 22";
  public text: string = "Team Magma's Rhydon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
