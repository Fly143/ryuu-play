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

export class AlakazamV_172 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Zen Spoon", cost: [], damage: "", text: "Put 3 damage counters on your opponent's Pokémon in any way you like." },
      { name: "Mind Ruler", cost: [], damage: "30×", text: "This attack does 30 damage for each card in your opponent's hand." }
  ];
  public set: string = "VIV";
  public name: string = "Alakazam V";
  public fullName: string = "Alakazam V VIV 172";
  public text: string = "Alakazam V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
