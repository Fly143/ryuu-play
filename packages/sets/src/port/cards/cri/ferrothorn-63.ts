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

export class Ferrothorn_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ferroseed";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Startling Drop", powerType: PowerType.ABILITY, text: "During your opponent's turn, if this Pokémon is discarded from your deck by an effect of an attack or Ability from your opponent's Pokémon, or by an effect of your opponent's Item or Supporter cards, discard the top 8 cards of your opponent's deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Special Whip", cost: [], damage: "70+", text: "If this Pokémon has any Special Energy attached, this attack does 70 more damage." }
  ];
  public set: string = "CRI";
  public name: string = "Ferrothorn";
  public fullName: string = "Ferrothorn CRI 63";
  public text: string = "Ferrothorn";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 70, 1);
    }
    return state;
  }
}
