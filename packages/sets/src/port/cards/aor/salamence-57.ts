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

export class Salamence_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shelgon";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shatter", cost: [], damage: "60", text: "Discard any Stadium card in play." },
      { name: "Power Howl", cost: [], damage: "20×", text: "This attack does 20 damage times the number of cards in your opponent's hand." },
      { name: "Steam Blast", cost: [], damage: "170", text: "Discard 3 Energy attached to this Pokémon." }
  ];
  public set: string = "AOR";
  public name: string = "Salamence";
  public fullName: string = "Salamence AOR 57";
  public text: string = "Salamence";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* discardStadium */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* damageTimesHand:20:opponent */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
