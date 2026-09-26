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

export class GalarianPerrserker_113 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Meowth";
  public hp: number = 120;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stealy Claws", cost: [], damage: "20", text: "Flip 3 coins. If any of them are heads, your opponent reveals their hand. Then, for each heads, discard a Trainer card from your opponent's hand." },
      { name: "Claw Slash", cost: [], damage: "90", text: "" }
  ];
  public set: string = "VIV";
  public name: string = "Galarian Perrserker";
  public fullName: string = "Galarian Perrserker VIV 113";
  public text: string = "Galarian Perrserker";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
