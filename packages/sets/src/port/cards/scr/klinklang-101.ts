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

export class Klinklang_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Klang";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Emergency Rotation", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in your hand and your opponent has any Stage 2 Pokémon in play, you may put this Pokémon onto your Bench.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hyper Ray", cost: [], damage: "130", text: "Discard all Energy from this Pokémon." }
  ];
  public set: string = "SCR";
  public name: string = "Klinklang";
  public fullName: string = "Klinklang SCR 101";
  public text: string = "Klinklang";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
