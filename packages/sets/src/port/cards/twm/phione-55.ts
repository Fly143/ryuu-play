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

export class Phione_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Beckon", cost: [], damage: "", text: "Put a Supporter card from your discard pile into your hand." },
      { name: "Energy Press", cost: [], damage: "20×", text: "This attack does 20 damage for each Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "TWM";
  public name: string = "Phione";
  public fullName: string = "Phione TWM 55";
  public text: string = "Phione";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscard");
    }
    return state;
  }
}
