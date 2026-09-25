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

export class DarkCharmeleon_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmander";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tail Slap", cost: [], damage: "20", text: "" },
      { name: "Fireball", cost: [], damage: "70", text: "Use this attack only if there are any Fire Energy cards attached to Dark Charmeleon. Flip a coin. If heads, discard 1 of those Energy cards. If tails, this attack does nothing (not even damage)." }
  ];
  public set: string = "TR";
  public name: string = "Dark Charmeleon";
  public fullName: string = "Dark Charmeleon TR 32";
  public text: string = "Dark Charmeleon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
