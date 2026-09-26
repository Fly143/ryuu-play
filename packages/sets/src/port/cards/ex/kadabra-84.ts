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

export class Kadabra_84 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Abra";
  public hp: number = 70;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Recall", cost: [], damage: "", text: "Attach 2 basic Energy cards from your discard pile to Kadabra (1 if you have only 1)." },
      { name: "Confuse Ray", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon is now Confused." }
  ];
  public set: string = "EX";
  public name: string = "Kadabra";
  public fullName: string = "Kadabra EX 84";
  public text: string = "Kadabra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
