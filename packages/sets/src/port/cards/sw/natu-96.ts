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

export class Natu_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bothering Wave", cost: [], damage: "20", text: "Flip a coin. If tails, this attack does nothing. If heads, discard an Energy card attached to the Defending Pokémon." },
      { name: "Future Sight", cost: [], damage: "", text: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order." }
  ];
  public set: string = "SW";
  public name: string = "Natu";
  public fullName: string = "Natu SW 96";
  public text: string = "Natu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
