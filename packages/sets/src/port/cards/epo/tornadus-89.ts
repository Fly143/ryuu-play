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

export class Tornadus_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Wheel", cost: [], damage: "", text: "Move an Energy from 1 of your Benched Pokémon to this Pokémon." },
      { name: "Hurricane", cost: [], damage: "80", text: "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "EPO";
  public name: string = "Tornadus";
  public fullName: string = "Tornadus EPO 89";
  public text: string = "Tornadus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "moveEnergyFromBenchToSelf");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    return state;
  }
}
