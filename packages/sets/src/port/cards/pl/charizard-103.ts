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

export class Charizard_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmeleon";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Burn", powerType: PowerType.ABILITY, text: "All Energy attached to Charizard are Fire Energy instead of their usual type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fire Spin", cost: [], damage: "100", text: "Discard 2 Energy attached to Charizard." }
  ];
  public set: string = "PL";
  public name: string = "Charizard";
  public fullName: string = "Charizard PL 103";
  public text: string = "Charizard";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
