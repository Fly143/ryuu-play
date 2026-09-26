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

export class DittoVMAX_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ditto V";
  public hp: number = 320;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Max Transform", cost: [], damage: "", text: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack." }
  ];
  public set: string = "SHF";
  public name: string = "Ditto VMAX";
  public fullName: string = "Ditto VMAX SHF 51";
  public text: string = "Ditto VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "copyAttack");
    }
    return state;
  }
}
