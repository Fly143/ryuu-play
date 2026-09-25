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

export class TeamMagmaSBaltoy_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psymist", cost: [], damage: "", text: "Flip 2 coins. For each heads, choose 1 of you opponent's Pokémon and put 1 damage counter on that Pokémon." },
      { name: "Pain Amplifier", cost: [], damage: "", text: "Put 1 damage counter on each of your opponent's Pokémon that already has damage counters on it." }
  ];
  public set: string = "MA";
  public name: string = "Team Magma's Baltoy";
  public fullName: string = "Team Magma's Baltoy MA 32";
  public text: string = "Team Magma's Baltoy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersEachOpponent(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
