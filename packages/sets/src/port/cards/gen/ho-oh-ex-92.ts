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

export class HoOhEX_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Purifying Fire", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon has any basic Fire Energy attached to it, you may heal 50 damage from it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Elemental Feather", cost: [], damage: "130", text: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon)." }
  ];
  public set: string = "GEN";
  public name: string = "Ho-Oh-EX";
  public fullName: string = "Ho-Oh-EX GEN 92";
  public text: string = "Ho-Oh-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
