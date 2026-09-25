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

export class StakatakaSM209 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wall of Stone", powerType: PowerType.ABILITY, text: "If your opponent has 3 or fewer Prize cards remaining, this Pokémon's maximum HP is 200.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Top Down", cost: [], damage: "110", text: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck." }
  ];
  public set: string = "PR-SM";
  public name: string = "Stakataka";
  public fullName: string = "Stakataka PR-SM SM209";
  public text: string = "Stakataka";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
