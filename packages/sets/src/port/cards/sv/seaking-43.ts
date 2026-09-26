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

export class Seaking_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Goldeen";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Horn Pierce", cost: [], damage: "90", text: "Flip 2 coins. If either of them is tails, this attack does nothing." },
      { name: "Endure", cost: [], damage: "30", text: "Flip a coin. If heads, during your opponent's next turn, if Seaking would be Knocked Out by damage from an attack, Seaking is not Knocked Out and its remaining HP becomes 10 instead." }
  ];
  public set: string = "SV";
  public name: string = "Seaking";
  public fullName: string = "Seaking SV 43";
  public text: string = "Seaking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
