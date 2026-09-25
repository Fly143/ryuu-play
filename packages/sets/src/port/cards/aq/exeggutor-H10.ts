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

export class ExeggutorH10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Exeggcute";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Super Eggsplosion", cost: [], damage: "40×", text: "Discard any number of Energy cards attached to any of your Pokémon. Flip a number of coins equal to the number of Energy cards discarded this way. This attack does 40 damage times the number of heads." },
      { name: "Called Shot", cost: [], damage: "", text: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage times the amount of Grass Energy attached to Exeggutor. (Don't apply Weakness or Resistance for Benched Pokémon.)" }
  ];
  public set: string = "AQ";
  public name: string = "Exeggutor";
  public fullName: string = "Exeggutor AQ H10";
  public text: string = "Exeggutor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
