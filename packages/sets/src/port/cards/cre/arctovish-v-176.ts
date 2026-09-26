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

export class ArctovishV_176 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 2.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ancient Freeze", cost: [], damage: "80", text: "If the Defending Pokémon is a Pokémon V or a Pokémon-GX, it can't attack during your opponent's next turn." },
      { name: "Giga Impact", cost: [], damage: "220", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "CRE";
  public name: string = "Arctovish V";
  public fullName: string = "Arctovish V CRE 176";
  public text: string = "Arctovish V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
