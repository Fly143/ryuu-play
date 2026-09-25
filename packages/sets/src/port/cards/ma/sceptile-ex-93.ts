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

export class SceptileEx_93 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grovyle";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Green Heal", cost: [], damage: "", text: "Remove 4 damage counters from each of your Pokémon that has Grass Energy attached. If that Pokémon has less than 4 damage counters, remove all of them." },
      { name: "Poison Ring", cost: [], damage: "40", text: "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat until the end of your opponent's next turn." },
      { name: "Slashing Strike", cost: [], damage: "100", text: "Sceptile ex can't use Slashing Strike during your next turn." }
  ];
  public set: string = "MA";
  public name: string = "Sceptile ex";
  public fullName: string = "Sceptile ex MA 93";
  public text: string = "Sceptile ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 40);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
