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

export class Krookodile_127 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Krokorok";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dark Clamp", cost: [], damage: "60", text: "The Defending Pokémon can't retreat during your opponent's next turn." },
      { name: "Bombast", cost: [], damage: "40×", text: "Does 40 damage times the number of Prize cards you have taken." }
  ];
  public set: string = "BCR";
  public name: string = "Krookodile";
  public fullName: string = "Krookodile BCR 127";
  public text: string = "Krookodile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "damageTimesPrize:40:taken");
    }
    return state;
  }
}
