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

export class TeamRocketSMeowth_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Miraculous Comeback", cost: [], damage: "", text: "Flip a number of coins equal to the number of Pokémon in play. This attack does 10 damage times the number of heads. Then Team Rocket's Meowth does 10 damage times the number of tails to itself." }
  ];
  public set: string = "BP";
  public name: string = "Team Rocket's Meowth";
  public fullName: string = "Team Rocket's Meowth BP 18";
  public text: string = "Team Rocket's Meowth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesPokemonInPlay(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
