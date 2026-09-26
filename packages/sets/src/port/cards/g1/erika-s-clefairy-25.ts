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

export class ErikaSClefairy_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Moonwatching", cost: [], damage: "", text: "Search your deck for a basic Energy card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward." },
      { name: "Comet Slap", cost: [], damage: "10×", text: "Flip 3 coins. This attack does 10 damage times the number of heads." }
  ];
  public set: string = "G1";
  public name: string = "Erika's Clefairy";
  public fullName: string = "Erika's Clefairy G1 25";
  public text: string = "Erika's Clefairy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchEnergyToHand:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 10);
    }
    return state;
  }
}
