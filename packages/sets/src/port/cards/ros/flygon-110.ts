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

export class Flygon_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vibrava";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sand Flap", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may choose either player. That player shuffles his or her hand into his or her deck and draws 4 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sand Tomb", cost: [], damage: "80", text: "The Defending Pokémon can't retreat during your opponent's next turn." }
  ];
  public set: string = "ROS";
  public name: string = "Flygon";
  public fullName: string = "Flygon ROS 110";
  public text: string = "Flygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
