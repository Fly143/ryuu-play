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

export class Leavanny_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swadloon";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nurturing", cost: [], damage: "", text: "Choose 1 of your Pokémon. Search your deck for a card that evolves from that Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward." },
      { name: "X-Scissor", cost: [], damage: "30+", text: "Flip a coin. If heads, this attack does 50 more damage." }
  ];
  public set: string = "EPO";
  public name: string = "Leavanny";
  public fullName: string = "Leavanny EPO 7";
  public text: string = "Leavanny";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 1);
    }
    return state;
  }
}
