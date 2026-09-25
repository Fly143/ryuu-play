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

export class Copperajah_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cufant";
  public hp: number = 200;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Massive Body", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, your opponent can't play any Stadium cards from their hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Nasal Lariat", cost: [], damage: "130+", text: "You may do 100 more damage. If you do, during your next turn, this Pokémon can't attack." }
  ];
  public set: string = "SFA";
  public name: string = "Copperajah";
  public fullName: string = "Copperajah SFA 42";
  public text: string = "Copperajah";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
