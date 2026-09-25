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

export class KingdraEx_80 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seadra";
  public hp: number = 310;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "King's Order", cost: [], damage: "", text: "Put up to 3 Water Pokémon from your discard pile onto your Bench." },
      { name: "Hydro Pump", cost: [], damage: "50+", text: "This attack does 50 more damage for each Water Energy attached to this Pokémon." }
  ];
  public set: string = "SFA";
  public name: string = "Kingdra ex";
  public fullName: string = "Kingdra ex SFA 80";
  public text: string = "Kingdra ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscardToBench");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
