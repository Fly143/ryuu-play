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

export class Manectric_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Electrike";
  public hp: number = 120;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bite", cost: [], damage: "50", text: "" },
      { name: "Assault Laser", cost: [], damage: "80+", text: "If your opponent's Active Pokémon has a Pokémon Tool attached, this attack does 80 more damage." }
  ];
  public set: string = "ASR";
  public name: string = "Manectric";
  public fullName: string = "Manectric ASR 55";
  public text: string = "Manectric";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    return state;
  }
}
