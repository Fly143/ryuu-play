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

export class Cobalion_91 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Press", cost: [], damage: "20+", text: "Does 20 more damage for each Energy attached to the Defending Pokémon." },
      { name: "Iron Breaker", cost: [], damage: "80", text: "The Defending Pokémon can't attack during your opponent's next turn." }
  ];
  public set: string = "PHF";
  public name: string = "Cobalion";
  public fullName: string = "Cobalion PHF 91";
  public text: string = "Cobalion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerEnergyDefending:20");
    }
    return state;
  }
}
