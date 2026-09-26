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

export class Dusclops_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Duskull";
  public hp: number = 70;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psychic Removal", cost: [], damage: "20", text: "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon." },
      { name: "Powerful Hand", cost: [], damage: "", text: "Count the number of cards in your hand. Put that many damage counters on the Defending Pokémon. You can't put more than 7 damage counters in this way." }
  ];
  public set: string = "DX";
  public name: string = "Dusclops";
  public fullName: string = "Dusclops DX 7";
  public text: string = "Dusclops";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
