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

export class Mawile_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mining", cost: [], damage: "", text: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. If that card is a Pokémon Tool card, you may attach it to 1 of your Pokémon instead. Shuffle your deck afterward." },
      { name: "Bite Off", cost: [], damage: "20+", text: "If the Defending Pokémon is Pokémon-ex, this attack does 20 damage plus 30 more damage." }
  ];
  public set: string = "CG";
  public name: string = "Mawile";
  public fullName: string = "Mawile CG 9";
  public text: string = "Mawile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchTrainerToHand:1");
    }
    return state;
  }
}
