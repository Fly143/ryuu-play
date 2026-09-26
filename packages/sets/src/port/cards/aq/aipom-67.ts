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

export class Aipom_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stretch Tail", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Skedaddle", cost: [], damage: "20", text: "Return Aipom and all basic Energy cards attached to it to your hand. If you have no Benched Pokémon, this attack does nothing." }
  ];
  public set: string = "AQ";
  public name: string = "Aipom";
  public fullName: string = "Aipom AQ 67";
  public text: string = "Aipom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
