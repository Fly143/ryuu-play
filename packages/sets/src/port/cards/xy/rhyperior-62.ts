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

export class Rhyperior_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rhydon";
  public hp: number = 160;
    public height?: number = 2.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rock Black", cost: [], damage: "50×", text: "Flip a coin for each Fighting Energy attached to this Pokémon. This attack does 50 damage times the number of heads." },
      { name: "Rock Wrecker", cost: [], damage: "130", text: "This attack's damage isn't affected by Weakness or Resistance. This Pokémon can't attack during your next turn." }
  ];
  public set: string = "XY";
  public name: string = "Rhyperior";
  public fullName: string = "Rhyperior XY 62";
  public text: string = "Rhyperior";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
