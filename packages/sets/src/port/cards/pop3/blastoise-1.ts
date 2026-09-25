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

export class Blastoise_1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wartortle";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Smash Turn", cost: [], damage: "30", text: "After your attack, you may switch Blastoise with 1 of your Benched Pokémon." },
      { name: "Rocket Tackle", cost: [], damage: "60", text: "Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Blastoise by attacks during your opponent's next turn." }
  ];
  public set: string = "POP3";
  public name: string = "Blastoise";
  public fullName: string = "Blastoise POP3 1";
  public text: string = "Blastoise";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "switchSelfAfterAttack");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
