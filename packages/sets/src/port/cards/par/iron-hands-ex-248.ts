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

export class IronHandsEx_248 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Arm Press", cost: [], damage: "160", text: "" },
      { name: "Amp You Very Much", cost: [], damage: "120", text: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card." }
  ];
  public set: string = "PAR";
  public name: string = "Iron Hands ex";
  public fullName: string = "Iron Hands ex PAR 248";
  public text: string = "Iron Hands ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "plusPrize:1");
    }
    return state;
  }
}
