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

export class ShellosWestSea_107 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mud Spatter", cost: [], damage: "10", text: "" },
      { name: "Recover", cost: [], damage: "", text: "Discard a Water Energy attached to Shellos West Sea and remove all damage counters from Shellos West Sea." }
  ];
  public set: string = "SW";
  public name: string = "Shellos West Sea";
  public fullName: string = "Shellos West Sea SW 107";
  public text: string = "Shellos West Sea";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 999);
    }
    return state;
  }
}
