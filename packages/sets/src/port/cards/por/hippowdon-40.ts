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

export class Hippowdon_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hippopotas";
  public hp: number = 150;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Twister Spewing", cost: [], damage: "80", text: "If you played Tarragon from your hand during this turn, discard the top 3 cards of your opponent's deck." },
      { name: "Heavy Impact", cost: [], damage: "130", text: "" }
  ];
  public set: string = "POR";
  public name: string = "Hippowdon";
  public fullName: string = "Hippowdon POR 40";
  public text: string = "Hippowdon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
