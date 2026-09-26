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

export class Frosmoth_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snom";
  public hp: number = 110;
    public height?: number = 2.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Alluring Wings", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Each player draws a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cold Cyclone", cost: [], damage: "90", text: "Move a Water Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "ASC";
  public name: string = "Frosmoth";
  public fullName: string = "Frosmoth ASC 53";
  public text: string = "Frosmoth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    return state;
  }
}
