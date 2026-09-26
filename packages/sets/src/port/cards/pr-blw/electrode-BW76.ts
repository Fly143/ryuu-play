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

export class ElectrodeBW76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Voltorb";
  public hp: number = 100;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electribeam", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon is Paralyzed." },
      { name: "Self Destruct", cost: [], damage: "100", text: "This Pokémon does 100 damage to itself." }
  ];
  public set: string = "PR-BLW";
  public name: string = "Electrode";
  public fullName: string = "Electrode PR-BLW BW76";
  public text: string = "Electrode";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 100);
    }
    return state;
  }
}
