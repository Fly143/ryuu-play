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

export class Luxray_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Luxio";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rivalry", powerType: PowerType.ABILITY, text: "If your opponent has any Pokémon LV.X in play, each of Luxray's attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Plasma", cost: [], damage: "40", text: "Search your discard pile for a Lightning Energy card and attach it to Luxray." },
      { name: "Shock Bolt", cost: [], damage: "100", text: "Discard all Lightning Energy attached to Luxray." }
  ];
  public set: string = "SF";
  public name: string = "Luxray";
  public fullName: string = "Luxray SF 8";
  public text: string = "Luxray";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
