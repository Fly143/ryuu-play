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

export class DarkHaunter_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gastly";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Call Back", cost: [], damage: "", text: "Put a Baby Pokémon or Basic Pokémon card from your opponent's discard pile onto his or her Bench. Put 1 damage counter on that Pokémon. (You can't use this attack if your Bench is full.)" },
      { name: "Surround", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon can't retreat during your opponent's next turn." }
  ];
  public set: string = "N4";
  public name: string = "Dark Haunter";
  public fullName: string = "Dark Haunter N4 36";
  public text: string = "Dark Haunter";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
