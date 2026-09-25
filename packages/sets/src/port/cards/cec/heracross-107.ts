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

export class Heracross_107 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Turn the Tables", cost: [], damage: "", text: "If 1 of your opponent's Pokémon used a GX attack during their last turn, your opponent shuffles their Active Pokémon and all cards attached to it into their deck." },
      { name: "Tackle", cost: [], damage: "70", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Heracross";
  public fullName: string = "Heracross CEC 107";
  public text: string = "Heracross";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "scoopUpOpponent");
    }
    return state;
  }
}
