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

export class DialgaEX_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chrono Wind", cost: [], damage: "60", text: "If the Defending Pokémon is a Pokémon-EX, it can't attack during your opponent's next turn." },
      { name: "Full Metal Impact", cost: [], damage: "150", text: "Discard 2 Metal Energy attached to this Pokémon." }
  ];
  public set: string = "PHF";
  public name: string = "Dialga-EX";
  public fullName: string = "Dialga-EX PHF 62";
  public text: string = "Dialga-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* cantAttackIfEx */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
