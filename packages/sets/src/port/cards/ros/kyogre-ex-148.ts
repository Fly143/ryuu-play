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

export class KyogreEX_148 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Water Pulse", cost: [], damage: "30", text: "Your opponent's Active Pokémon is now Asleep." },
      { name: "Giant Whirlpool", cost: [], damage: "140", text: "Return 2 Water Energy attached to this Pokémon to your hand." }
  ];
  public set: string = "ROS";
  public name: string = "Kyogre-EX";
  public fullName: string = "Kyogre-EX ROS 148";
  public text: string = "Kyogre-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
