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

export class Gigalith_129 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Boldore";
  public hp: number = 170;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Vengeful Cannon", cost: [], damage: "20×", text: "This attack does 20 damage for each damage counter on all of your Benched Fighting Pokémon." },
      { name: "Heavy Impact", cost: [], damage: "160", text: "" }
  ];
  public set: string = "WHT";
  public name: string = "Gigalith";
  public fullName: string = "Gigalith WHT 129";
  public text: string = "Gigalith";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerDamagedBenchAll:20");
    }
    return state;
  }
}
