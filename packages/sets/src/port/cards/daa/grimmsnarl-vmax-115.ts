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

export class GrimmsnarlVMAX_115 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grimmsnarl V";
  public hp: number = 330;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "G-Max Drill", cost: [], damage: "170+", text: "This attack does 50 more damage for each extra Darkness Energy attached to this Pokémon (in addition to this attack's cost). You can't add more than 100 damage in this way." }
  ];
  public set: string = "DAA";
  public name: string = "Grimmsnarl VMAX";
  public fullName: string = "Grimmsnarl VMAX DAA 115";
  public text: string = "Grimmsnarl VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
