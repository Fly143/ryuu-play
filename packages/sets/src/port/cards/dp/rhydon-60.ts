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

export class Rhydon_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rhyhorn";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Storm Up", cost: [], damage: "30+", text: "If there is any Stadium card in play, this attack does 30 damage plus 20 more damage. Discard that Stadium card." },
      { name: "Crash Impact", cost: [], damage: "60", text: "Rhydon does 10 damage to itself. Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any." }
  ];
  public set: string = "DP";
  public name: string = "Rhydon";
  public fullName: string = "Rhydon DP 60";
  public text: string = "Rhydon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
