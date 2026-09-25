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

export class EternatusVMAX_192 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eternatus V";
  public hp: number = 340;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Eternal Zone", powerType: PowerType.ABILITY, text: "If all of your Pokémon in play are Darkness type, you can have up to 8 Pokémon on your Bench, and you can't put non-Darkness Pokémon into play. (If this Ability stops working, discard Pokémon from your Bench until you have 5.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dread End", cost: [], damage: "30×", text: "This attack does 30 damage for each of your Darkness Pokémon in play." }
  ];
  public set: string = "DAA";
  public name: string = "Eternatus VMAX";
  public fullName: string = "Eternatus VMAX DAA 192";
  public text: string = "Eternatus VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerOwnBench(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
