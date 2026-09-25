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

export class Psyduck_87 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Headache", cost: [], damage: "", text: "Flip a coin. If heads, your opponent can't play any Trainer, Supporter, or Stadium cards from his or her hand during his or her next turn." },
      { name: "Latent Power", cost: [], damage: "30", text: "Flip a coin. If tails, this attack does no damage to the Defending Pokémon. Instead, Psyduck is now Confused." }
  ];
  public set: string = "PL";
  public name: string = "Psyduck";
  public fullName: string = "Psyduck PL 87";
  public text: string = "Psyduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
