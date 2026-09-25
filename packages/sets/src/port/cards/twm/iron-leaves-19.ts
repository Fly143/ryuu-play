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

export class IronLeaves_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Recovery Net", cost: [], damage: "", text: "Put up to 2 Pokémon from your discard pile into your hand." },
      { name: "Avenging Edge", cost: [], damage: "100+", text: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage." }
  ];
  public set: string = "TWM";
  public name: string = "Iron Leaves";
  public fullName: string = "Iron Leaves TWM 19";
  public text: string = "Iron Leaves";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscard");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 1);
    }
    return state;
  }
}
