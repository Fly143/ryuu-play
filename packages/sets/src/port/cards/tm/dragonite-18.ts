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

export class Dragonite_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dragonair";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Calming Wind", cost: [], damage: "50", text: "Remove all Special Conditions from Dragonite." },
      { name: "Dragon Stamp", cost: [], damage: "80", text: "Flip 2 coins. If both of them are tails, this attack does nothing. If both of them are heads, the Defending Pokémon is now Paralyzed." }
  ];
  public set: string = "TM";
  public name: string = "Dragonite";
  public fullName: string = "Dragonite TM 18";
  public text: string = "Dragonite";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
