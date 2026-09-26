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

export class Dialga_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 140;
    public height?: number = 5.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Beam", cost: [], damage: "30", text: "" },
      { name: "Chrono Burst", cost: [], damage: "80+", text: "You may shuffle all Energy attached to this Pokémon into your deck and have this attack do 80 more damage." }
  ];
  public set: string = "MEG";
  public name: string = "Dialga";
  public fullName: string = "Dialga MEG 95";
  public text: string = "Dialga";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 80);
    }
    return state;
  }
}
