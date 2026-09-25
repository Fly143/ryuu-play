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

export class NinetalesEX_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flare Bonus", cost: [], damage: "", text: "Discard a Fire Energy card from your hand. If you do, draw 3 cards." },
      { name: "Fire Blast", cost: [], damage: "130", text: "Flip a coin. If tails, discard a Fire Energy attached to this Pokémon." }
  ];
  public set: string = "GEN";
  public name: string = "Ninetales-EX";
  public fullName: string = "Ninetales-EX GEN 13";
  public text: string = "Ninetales-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsDiscardEnergyOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
