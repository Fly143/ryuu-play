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

export class Zoroark_143 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zorua";
  public hp: number = 120;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mind Jack", cost: [], damage: "30×", text: "This attack does 30 damage for each of your opponent's Benched Pokémon." },
      { name: "Foul Play", cost: [], damage: "", text: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack." }
  ];
  public set: string = "WHT";
  public name: string = "Zoroark";
  public fullName: string = "Zoroark WHT 143";
  public text: string = "Zoroark";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "copyAttack");
    }
    return state;
  }
}
