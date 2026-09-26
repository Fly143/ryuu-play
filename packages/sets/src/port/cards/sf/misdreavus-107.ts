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

export class Misdreavus_107 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Show Off", cost: [], damage: "", text: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward." },
      { name: "Payback", cost: [], damage: "10+", text: "If your opponent has only 1 Prize card left, this attack does 10 damage plus 20 more damage." }
  ];
  public set: string = "SF";
  public name: string = "Misdreavus";
  public fullName: string = "Misdreavus SF 107";
  public text: string = "Misdreavus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchEnergyToHand:1");
    }
    return state;
  }
}
