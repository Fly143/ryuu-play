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

export class Electrode_362 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Voltorb";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Plasma", cost: [], damage: "20", text: "If there are any Lightning Energy card in your discard pile, flip a coin. If heads, attach 1 of them to Electrode." },
      { name: "Selfdestruct", cost: [], damage: "100", text: "This attack does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Electrode does 100 damage to itself." }
  ];
  public set: string = "SK";
  public name: string = "Electrode";
  public fullName: string = "Electrode SK 36";
  public text: string = "Electrode";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 100);
    }
    return state;
  }
}
