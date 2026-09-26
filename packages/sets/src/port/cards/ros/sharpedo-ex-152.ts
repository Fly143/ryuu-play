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

export class SharpedoEX_152 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hunt", cost: [], damage: "", text: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon. This attack does 30 damage to the new Active Pokémon." },
      { name: "Jagged Fang", cost: [], damage: "100", text: "Discard an Energy attached to this Pokémon. Then, discard an Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "ROS";
  public name: string = "Sharpedo-EX";
  public fullName: string = "Sharpedo-EX ROS 152";
  public text: string = "Sharpedo-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
