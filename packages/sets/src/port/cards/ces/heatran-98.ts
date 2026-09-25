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

export class Heatran_98 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Steelworks", cost: [], damage: "", text: "Look at the top 4 cards of your deck and attach any number of Metal Energy cards you find there to 1 of your Pokémon. Shuffle the other cards back into your deck." },
      { name: "Steel Tackle", cost: [], damage: "120", text: "This Pokémon does 30 damage to itself." }
  ];
  public set: string = "CES";
  public name: string = "Heatran";
  public fullName: string = "Heatran CES 98";
  public text: string = "Heatran";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -30, 1);
    }
    return state;
  }
}
