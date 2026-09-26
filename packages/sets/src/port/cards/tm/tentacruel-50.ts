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

export class Tentacruel_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tentacool";
  public hp: number = 90;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tentavolve", cost: [], damage: "20", text: "If Tentacruel evolved from Tentacool during this turn, the Defending Pokémon is now Paralyzed and Poisoned." },
      { name: "Hyper Beam", cost: [], damage: "50", text: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon." }
  ];
  public set: string = "TM";
  public name: string = "Tentacruel";
  public fullName: string = "Tentacruel TM 50";
  public text: string = "Tentacruel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
