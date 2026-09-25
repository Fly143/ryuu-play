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

export class MegaCameruptEx_156 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Numel";
  public hp: number = 340;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Roasting Heat", cost: [], damage: "80+", text: "If your opponent's Active Pokémon is Burned, this attack does 160 more damage." },
      { name: "Volcanic Meteor", cost: [], damage: "280", text: "Discard 2 Energy from this Pokémon." }
  ];
  public set: string = "MEG";
  public name: string = "Mega Camerupt ex";
  public fullName: string = "Mega Camerupt ex MEG 156";
  public text: string = "Mega Camerupt ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 160, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
