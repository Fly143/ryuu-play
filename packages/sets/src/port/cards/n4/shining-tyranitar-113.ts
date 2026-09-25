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

export class ShiningTyranitar_113 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mountain Crush", cost: [], damage: "30", text: "Flip a coin until you get tails. For each heads, your opponent discards the top card from his or her deck." },
      { name: "Destructive Fire", cost: [], damage: "50", text: "Flip a coin for each Fire Energy card attached to Shining Tyranitar. For each heads, discard a Fire Energy card attached to Shining Tyranitar or this attack does nothing. Then, for each heads, choose an Energy card attached to the Defending Pokémon and discard it. If it has fewer Energy cards than that, remove all of them." }
  ];
  public set: string = "N4";
  public name: string = "Shining Tyranitar";
  public fullName: string = "Shining Tyranitar N4 113";
  public text: string = "Shining Tyranitar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
