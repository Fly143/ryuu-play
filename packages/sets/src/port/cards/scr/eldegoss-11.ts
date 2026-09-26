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

export class Eldegoss_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gossifleur";
  public hp: number = 90;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Breezy Gift", cost: [], damage: "", text: "Put this Pokémon and all attached cards into your deck. If you do, search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck." },
      { name: "Leafage", cost: [], damage: "50", text: "" }
  ];
  public set: string = "SCR";
  public name: string = "Eldegoss";
  public fullName: string = "Eldegoss SCR 11";
  public text: string = "Eldegoss";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:3");
    }
    return state;
  }
}
