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

export class TeamMagmaSTorkoal_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magma Burn", cost: [], damage: "10", text: "Discard the top card from your opponent's deck, and flip a coin. If tails, discard a Fire Energy attached to Team Magma's Torkoal." },
      { name: "Hot Air", cost: [], damage: "30", text: "Discard a Fire Energy attached to Team Magma's Torkoal and your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any." }
  ];
  public set: string = "MA";
  public name: string = "Team Magma's Torkoal";
  public fullName: string = "Team Magma's Torkoal MA 12";
  public text: string = "Team Magma's Torkoal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsDiscardEnergyOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
