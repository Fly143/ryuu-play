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

export class Victini_302 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flippity Flap", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw 6 cards." },
      { name: "Singe Off", cost: [], damage: "30", text: "Discard a Special Energy from your opponent's Active Pokémon." }
  ];
  public set: string = "TEF";
  public name: string = "Victini";
  public fullName: string = "Victini TEF 30";
  public text: string = "Victini";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
