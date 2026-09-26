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

export class HattereneV_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Horoscope", cost: [], damage: "", text: "Look at the top 3 cards of your deck. You may attach any number of Energy cards you find there to this Pokémon. Put the other cards back in any order." },
      { name: "Teleportation Burst", cost: [], damage: "80", text: "Switch this Pokémon with 1 of your Benched Pokémon." }
  ];
  public set: string = "CRZ";
  public name: string = "Hatterene V";
  public fullName: string = "Hatterene V CRZ 65";
  public text: string = "Hatterene V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
