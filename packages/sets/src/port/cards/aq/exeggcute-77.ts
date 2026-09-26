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

export class Exeggcute_77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Continuous Eggsplosion", cost: [], damage: "10×", text: "Flip a coin until you get tails. This attack does 10 damage times the number of heads." },
      { name: "Energy Support", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for a Psychic Energy card and attach it to 1 of your Benched Pokémon. Shuffle your deck afterward." }
  ];
  public set: string = "AQ";
  public name: string = "Exeggcute";
  public fullName: string = "Exeggcute AQ 77";
  public text: string = "Exeggcute";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipUntilTailsDamage(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
