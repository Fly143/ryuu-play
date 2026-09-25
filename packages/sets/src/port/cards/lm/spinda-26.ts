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

export class Spinda_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Pattern Distraction", powerType: PowerType.ABILITY, text: "As long as Spinda is your Active Pokémon, whenever your opponent's Basic Pokémon tries to attack, your opponent flips a coin. If tails, that attack does nothing. You can't use more than 1 Pattern Distraction Poké-Body each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Whimsy Draw", cost: [], damage: "", text: "Flip a coin until you get tails. For each heads, draw 2 cards." },
      { name: "Double-edge", cost: [], damage: "30", text: "Flip a coin. If tails, Spinda does 10 damage to itself." }
  ];
  public set: string = "LM";
  public name: string = "Spinda";
  public fullName: string = "Spinda LM 26";
  public text: string = "Spinda";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTailsSelfDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
