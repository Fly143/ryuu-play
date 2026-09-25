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

export class SingleStrikeUrshifuVMAXTG29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Single Strike Urshifu V";
  public hp: number = 330;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Beatdown", cost: [], damage: "100", text: "" },
      { name: "G-Max One Blow", cost: [], damage: "270", text: "Discard all Energy from this Pokémon. This attack's damage isn't affected by any effects on your opponent's Active Pokémon." }
  ];
  public set: string = "BRS";
  public name: string = "Single Strike Urshifu VMAX";
  public fullName: string = "Single Strike Urshifu VMAX BRS TG29";
  public text: string = "Single Strike Urshifu VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
