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

export class RotomVSWSH257 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lost Hack", cost: [], damage: "", text: "Put a Special Energy attached to 1 of your opponent's Pokémon in the Lost Zone." },
      { name: "Extreme Current", cost: [], damage: "160", text: "Discard an Energy from this Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Rotom V";
  public fullName: string = "Rotom V PR-SW SWSH257";
  public text: string = "Rotom V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
