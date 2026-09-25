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

export class TeamRocketSNidoqueen_116 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Nidorina";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Love Impact", cost: [], damage: "60+", text: "If a Pokémon that has \"Nidoking\" in its name is on your Bench, this attack does 120 more damage." },
      { name: "Mega Kick", cost: [], damage: "130", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Nidoqueen";
  public fullName: string = "Team Rocket's Nidoqueen DRI 116";
  public text: string = "Team Rocket's Nidoqueen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
