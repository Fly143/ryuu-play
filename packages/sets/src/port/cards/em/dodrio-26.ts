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

export class Dodrio_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Doduo";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Smash Kick", cost: [], damage: "30", text: "" },
      { name: "Smash Turn", cost: [], damage: "40", text: "After your attack, you may switch Dodrio with 1 of your Benched Pokémon." }
  ];
  public set: string = "EM";
  public name: string = "Dodrio";
  public fullName: string = "Dodrio EM 26";
  public text: string = "Dodrio";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "switchSelfAfterAttack");
    }
    return state;
  }
}
