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

export class Sableye_70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scratch", cost: [], damage: "20", text: "" },
      { name: "Lost Mine", cost: [], damage: "", text: "You can use this attack only if you have 10 or more cards in the Lost Zone. Put 12 damage counters on your opponent's Pokémon in any way you like." }
  ];
  public set: string = "ASR";
  public name: string = "Sableye";
  public fullName: string = "Sableye ASR 70";
  public text: string = "Sableye";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 120);
    }
    return state;
  }
}
