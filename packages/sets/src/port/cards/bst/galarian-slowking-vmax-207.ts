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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GalarianSlowkingVMAX_207 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Slowking V";
  public hp: number = 320;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Max Toxify", cost: [], damage: "10", text: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 12 damage counters on that Pokémon instead of 1." }
  ];
  public set: string = "BST";
  public name: string = "Galarian Slowking VMAX";
  public fullName: string = "Galarian Slowking VMAX BST 207";
  public text: string = "Galarian Slowking VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
