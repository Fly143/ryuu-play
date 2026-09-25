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

export class Haxorus_111 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fraxure";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dragon Dance", cost: [], damage: "", text: "As long as this Haxorus is your Active Pokémon, each of its attacks does 100 more damage (before applying Weakness and Resistance). You can't add more than 100 damage in this way." },
      { name: "Sharp Fang", cost: [], damage: "60", text: "" },
      { name: "Dragon Pulse", cost: [], damage: "130", text: "Discard the top 3 cards of your deck." }
  ];
  public set: string = "BKP";
  public name: string = "Haxorus";
  public fullName: string = "Haxorus BKP 111";
  public text: string = "Haxorus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 100);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
