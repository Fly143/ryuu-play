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

export class AlakazamEx_188 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kadabra";
  public hp: number = 310;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mind Jack", cost: [], damage: "90+", text: "This attack does 30 more damage for each of your opponent's Benched Pokémon." },
      { name: "Dimensional Hand", cost: [], damage: "120", text: "This attack can be used even if this Pokémon is on the Bench." }
  ];
  public set: string = "MEW";
  public name: string = "Alakazam ex";
  public fullName: string = "Alakazam ex MEW 188";
  public text: string = "Alakazam ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerOpponentBench(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
