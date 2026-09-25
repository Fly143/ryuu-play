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

export class TeamRocketSTyranitar_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Pupitar";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sand Stream", powerType: PowerType.ABILITY, text: "During Pokémon Checkup, if this Pokémon is in the Active Spot, put 2 damage counters on each of your opponent's Basic Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Demolition Tackle", cost: [], damage: "180", text: "Discard an Energy from your opponent's Active Pokémon." }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Tyranitar";
  public fullName: string = "Team Rocket's Tyranitar DRI 96";
  public text: string = "Team Rocket's Tyranitar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
