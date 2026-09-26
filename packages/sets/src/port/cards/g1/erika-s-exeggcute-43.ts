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

export class ErikaSExeggcute_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Deflector", cost: [], damage: "", text: "During your opponent's next turn, whenever Erika's Exeggcute takes damage, divide that damage in half (rounded down to the nearest 10). (Any other effects still happen.)" },
      { name: "Egg Bomb", cost: [], damage: "40", text: "Flip a coin. If tails, this attack does nothing to the Defending Pokémon and Erika's Exeggcute does 20 damage to itself." }
  ];
  public set: string = "G1";
  public name: string = "Erika's Exeggcute";
  public fullName: string = "Erika's Exeggcute G1 43";
  public text: string = "Erika's Exeggcute";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
