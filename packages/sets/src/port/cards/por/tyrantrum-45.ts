import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Tyrantrum_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tyrunt";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tyrannically Gutsy", powerType: PowerType.ABILITY, text: "If this Pokémon has any Special Energy attached, it gets +150 HP.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wreak Havoc", cost: [], damage: "160", text: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck." }
  ];
  public set: string = "POR";
  public name: string = "Tyrantrum";
  public fullName: string = "Tyrantrum POR 45";
  public text: string = "Tyrantrum";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
