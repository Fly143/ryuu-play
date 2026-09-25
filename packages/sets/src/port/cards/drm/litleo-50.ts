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

export class Litleo_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wild Dash", powerType: PowerType.ABILITY, text: "If your opponent has any Pokémon-GX or Pokémon-EX in play, this Pokémon has no Retreat Cost.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Take Down", cost: [], damage: "30", text: "This Pokémon does 10 damage to itself." }
  ];
  public set: string = "DRM";
  public name: string = "Litleo";
  public fullName: string = "Litleo DRM 50";
  public text: string = "Litleo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
