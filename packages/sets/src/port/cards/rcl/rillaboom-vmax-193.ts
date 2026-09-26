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

export class RillaboomVMAX_193 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rillaboom V";
  public hp: number = 330;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scratch", cost: [], damage: "50", text: "" },
      { name: "Max Beating", cost: [], damage: "130+", text: "You may discard up to 3 Grass Energy from this Pokémon. If you do, this attack does 50 more damage for each card you discarded in this way." }
  ];
  public set: string = "RCL";
  public name: string = "Rillaboom VMAX";
  public fullName: string = "Rillaboom VMAX RCL 193";
  public text: string = "Rillaboom VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 0);
    }
    return state;
  }
}
