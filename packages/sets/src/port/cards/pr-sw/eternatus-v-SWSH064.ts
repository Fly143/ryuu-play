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

export class EternatusVSWSH064 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Power Accelerator", cost: [], damage: "30", text: "You may attach a Darkness Energy card from your hand to 1 of your Benched Pokémon." },
      { name: "Dynamax Cannon", cost: [], damage: "120+", text: "If your opponent's Active Pokémon is a Pokémon VMAX, this attack does 120 more damage." }
  ];
  public set: string = "PR-SW";
  public name: string = "Eternatus V";
  public fullName: string = "Eternatus V PR-SW SWSH064";
  public text: string = "Eternatus V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
