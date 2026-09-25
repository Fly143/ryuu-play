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

export class Togekiss_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Togetic";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Serene Grace", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Togekiss from your hand to evolve 1 of your Pokémon, you may look at the top 10 cards of your deck, choose as many basic Energy cards as you like, and attach them to your Pokémon in any way you like. Put the other cards back on top of your deck. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Air Scroll", cost: [], damage: "40+", text: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage. If tails, remove 3 damage counters from Togekiss." }
  ];
  public set: string = "GE";
  public name: string = "Togekiss";
  public fullName: string = "Togekiss GE 11";
  public text: string = "Togekiss";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
