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

export class Plusle_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Greedy Draw", cost: [], damage: "", text: "If you have the same number of cards or less in your hand as your opponent, draw cards until you have 1 more card than your opponent. (If you have more cards in your hand than your opponent, this attack does nothing.)" },
      { name: "Hand Charge", cost: [], damage: "10", text: "Attach a Lightning Energy card from your hand to 1 of your Pokémon." }
  ];
  public set: string = "SV";
  public name: string = "Plusle";
  public fullName: string = "Plusle SV 76";
  public text: string = "Plusle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
