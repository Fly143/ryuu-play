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

export class Grumpig_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spoink";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psyshock", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed." },
      { name: "Teleport Blast", cost: [], damage: "40", text: "After your attack, you may switch Grumpig with 1 of your Benched Pokémon." }
  ];
  public set: string = "EM";
  public name: string = "Grumpig";
  public fullName: string = "Grumpig EM 29";
  public text: string = "Grumpig";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "switchSelfAfterAttack");
    }
    return state;
  }
}
