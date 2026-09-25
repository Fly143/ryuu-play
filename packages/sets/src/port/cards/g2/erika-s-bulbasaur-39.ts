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

export class ErikaSBulbasaur_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sleep Seed", cost: [], damage: "10", text: "The Defending Pokémon is now Asleep." },
      { name: "Errand-Running", cost: [], damage: "", text: "Flip a coin. If heads, you may search your deck for a Trainer card. Show it to your opponent and put it into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "G2";
  public name: string = "Erika's Bulbasaur";
  public fullName: string = "Erika's Bulbasaur G2 39";
  public text: string = "Erika's Bulbasaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchTrainerToHand:1");
    }
    return state;
  }
}
