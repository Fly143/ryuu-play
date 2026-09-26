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

export class Raticate_613 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rattata";
  public hp: number = 90;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scrape Off", cost: [], damage: "20", text: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon." },
      { name: "Retaliatory Incisors", cost: [], damage: "40×", text: "This attack does 40 damage for each damage counter on all of your Benched Rattata." }
  ];
  public set: string = "POR";
  public name: string = "Raticate";
  public fullName: string = "Raticate POR 61";
  public text: string = "Raticate";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerDamagedBenchAll:40");
    }
    return state;
  }
}
