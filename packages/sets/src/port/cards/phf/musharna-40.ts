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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Musharna_402 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Munna";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dream of Memories", cost: [], damage: "", text: "Shuffle 3 cards from your discard pile into your deck." },
      { name: "Dream Dance", cost: [], damage: "30", text: "Both Active Pokémon are now Asleep." }
  ];
  public set: string = "PHF";
  public name: string = "Musharna";
  public fullName: string = "Musharna PHF 40";
  public text: string = "Musharna";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialBoth(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
