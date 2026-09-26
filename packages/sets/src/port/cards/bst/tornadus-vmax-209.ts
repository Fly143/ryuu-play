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

export class TornadusVMAX_209 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tornadus V";
  public hp: number = 320;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Blasting Wind", cost: [], damage: "60", text: "" },
      { name: "Max Wind Spirit", cost: [], damage: "120+", text: "If a Stadium is in play, this attack does 120 more damage. Then, discard that Stadium." }
  ];
  public set: string = "BST";
  public name: string = "Tornadus VMAX";
  public fullName: string = "Tornadus VMAX BST 209";
  public text: string = "Tornadus VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
