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

export class TeamRocketSMuk_124 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Grimer";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gooped Up", cost: [], damage: "40", text: "Your opponent's Active Pokémon is now Confused. During your opponent's next turn, that Pokémon can't retreat." },
      { name: "Hazardous Venom", cost: [], damage: "100×", text: "This attack does 100 damage for each Special Condition affecting your opponent's Active Pokémon." }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Muk";
  public fullName: string = "Team Rocket's Muk DRI 124";
  public text: string = "Team Rocket's Muk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
