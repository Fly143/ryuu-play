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

export class GardevoirEXRC30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Life Leap", cost: [], damage: "20", text: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon." },
      { name: "Shining Wind", cost: [], damage: "100", text: "During your opponent's next turn, this Pokémon has no Weakness." }
  ];
  public set: string = "GEN";
  public name: string = "Gardevoir-EX";
  public fullName: string = "Gardevoir-EX GEN RC30";
  public text: string = "Gardevoir-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAfterAttack(this, store, state, effect).use(effect, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "noWeaknessNextTurn");
    }
    return state;
  }
}
