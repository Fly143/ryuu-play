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

export class TyranitarEx_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pupitar";
  public hp: number = 150;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scratch", cost: [], damage: "20", text: "" },
      { name: "Critical Crush", cost: [], damage: "80", text: "Discard 2 Basic Energy cards attached to Tyranitar ex or this attack does nothing." }
  ];
  public set: string = "POP1";
  public name: string = "Tyranitar ex";
  public fullName: string = "Tyranitar ex POP1 17";
  public text: string = "Tyranitar ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
