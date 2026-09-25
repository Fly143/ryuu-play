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

export class Aipom_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Collect", cost: [], damage: "", text: "Draw a card." },
      { name: "Hand Trick", cost: [], damage: "20", text: "Return Aipom and all cards attached to it to your hand. (If you don't have any Benched Pokémon, this attack does nothing.)" }
  ];
  public set: string = "LA";
  public name: string = "Aipom";
  public fullName: string = "Aipom LA 50";
  public text: string = "Aipom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
