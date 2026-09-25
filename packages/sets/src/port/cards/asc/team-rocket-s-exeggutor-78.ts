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

export class TeamRocketSExeggutor_78 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Exeggcute";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tri Kinesis", cost: [], damage: "", text: "Flip 3 coins. If all of them are heads, Knock Out 1 of your opponent's Pokémon." },
      { name: "Double-Edge", cost: [], damage: "150", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "ASC";
  public name: string = "Team Rocket's Exeggutor";
  public fullName: string = "Team Rocket's Exeggutor ASC 78";
  public text: string = "Team Rocket's Exeggutor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -30, 1);
    }
    return state;
  }
}
