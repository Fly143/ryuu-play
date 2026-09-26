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

export class TeamRocketSNidorino_118 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Nidoran♂";
  public hp: number = 100;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hammer In", cost: [], damage: "30", text: "" },
      { name: "Horn Rend", cost: [], damage: "60+", text: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 60 more damage." }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Nidorino";
  public fullName: string = "Team Rocket's Nidorino DRI 118";
  public text: string = "Team Rocket's Nidorino";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 1);
    }
    return state;
  }
}
