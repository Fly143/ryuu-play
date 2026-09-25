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

export class RocketSMeowth_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Snatch and Run", cost: [], damage: "", text: "Search your deck for a Pokémon Tool card or Rocket's Secret Machine card, show it to your opponent, and put it into your hand. If you do, you may switch Rocket's Meowth with 1 of your Benched Pokémon. Shuffle your deck afterward." },
      { name: "Miraculous Comeback", cost: [], damage: "10×", text: "Flip a coin for each Pokémon in play (both yours and your opponent's). This attack does 10 damage times the number of heads. Rocket's Meowth does 10 damage times the number of tails to itself." }
  ];
  public set: string = "TRR";
  public name: string = "Rocket's Meowth";
  public fullName: string = "Rocket's Meowth TRR 46";
  public text: string = "Rocket's Meowth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
