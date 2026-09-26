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

export class TyphlosionEx_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Quilava";
  public hp: number = 160;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ring of Fire", cost: [], damage: "40", text: "The Defending Pokémon is now Burned, and can't retreat until the end of your opponent's next turn." },
      { name: "Split Blast", cost: [], damage: "100", text: "Discard 1 Energy card attached to Typhlosion ex. If your opponent has more than 1 Defending Pokémon, you may do 50 damage to each of them instead." }
  ];
  public set: string = "SS";
  public name: string = "Typhlosion ex";
  public fullName: string = "Typhlosion ex SS 99";
  public text: string = "Typhlosion ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
