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

export class MistySGolduck_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Misty's Psyduck";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electro Beam", cost: [], damage: "40", text: "Flip a coin. If tails, discard all Energy cards attached to Misty's Golduck." },
      { name: "Super Removal", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 Energy card attached to each of your opponent's Pokémon that has any Energy cards and discard those Energy cards." }
  ];
  public set: string = "G2";
  public name: string = "Misty's Golduck";
  public fullName: string = "Misty's Golduck G2 12";
  public text: string = "Misty's Golduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
