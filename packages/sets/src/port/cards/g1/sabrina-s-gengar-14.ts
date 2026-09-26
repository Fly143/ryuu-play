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

export class SabrinaSGengar_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sabrina's Haunter";
  public hp: number = 80;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pain Amplifier", cost: [], damage: "", text: "Put a damage counter on each of your opponent's Pokémon has already has any damage counters on it." },
      { name: "Call of the Night", cost: [], damage: "40", text: "Unless this attack Knocks Out the Defending Pokémon, flip 2 coins. If both of them are heads, your opponent shuffles his or her Active Pokémon and all cards attached to it into his or her deck." }
  ];
  public set: string = "G1";
  public name: string = "Sabrina's Gengar";
  public fullName: string = "Sabrina's Gengar G1 14";
  public text: string = "Sabrina's Gengar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "scoopUpOpponent");
    }
    return state;
  }
}
