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

export class GyaradosVMAX_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gyarados V";
  public hp: number = 330;
    public height?: number = 6.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hyper Beam", cost: [], damage: "120", text: "Discard an Energy from your opponent's Active Pokémon." },
      { name: "Max Tyrant", cost: [], damage: "240", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Gyarados VMAX";
  public fullName: string = "Gyarados VMAX CRE 29";
  public text: string = "Gyarados VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
