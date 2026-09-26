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

export class ShayminV_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flap", cost: [], damage: "30", text: "" },
      { name: "Revenge Blast", cost: [], damage: "60+", text: "This attack does 40 more damage for each Prize card your opponent has taken." }
  ];
  public set: string = "FST";
  public name: string = "Shaymin V";
  public fullName: string = "Shaymin V FST 13";
  public text: string = "Shaymin V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerPrize(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
