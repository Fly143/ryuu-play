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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DarkPersian_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meowth";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tempt", cost: [], damage: "", text: "If your opponent has any Benched Pokémon, flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon." },
      { name: "Poison Claws", cost: [], damage: "10", text: "Flip a coin. if heads, the Defending Pokémon is now Poisoned." }
  ];
  public set: string = "BP";
  public name: string = "Dark Persian";
  public fullName: string = "Dark Persian BP 17";
  public text: string = "Dark Persian";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipHeadsGustOpponent");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
