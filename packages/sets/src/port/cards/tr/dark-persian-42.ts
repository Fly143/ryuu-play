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

export class DarkPersian_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meowth";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fascinate", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon. This attack can't be used if your opponent has no Benched Pokémon." },
      { name: "Poison Claws", cost: [], damage: "10", text: "Flip a coin. If heads, the Defending Pokémon is now Poisoned." }
  ];
  public set: string = "TR";
  public name: string = "Dark Persian";
  public fullName: string = "Dark Persian TR 42";
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
