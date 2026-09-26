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

export class Bruxish_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Vivid Charge", cost: [], damage: "", text: "Search your deck for up to 3 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Wave Splash", cost: [], damage: "60", text: "" }
  ];
  public set: string = "SVI";
  public name: string = "Bruxish";
  public fullName: string = "Bruxish SVI 51";
  public text: string = "Bruxish";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchEnergyToHand:3");
    }
    return state;
  }
}
