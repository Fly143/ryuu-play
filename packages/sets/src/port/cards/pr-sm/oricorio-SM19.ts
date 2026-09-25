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

export class OricorioSM19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Supernatural Dance", cost: [], damage: "", text: "For each Pokémon in your opponent's discard pile, put 1 damage counter on your opponent's Pokémon in any way you like." },
      { name: "Revelation Dance", cost: [], damage: "30", text: "If there is no Stadium card in play, this attack does nothing." }
  ];
  public set: string = "PR-SM";
  public name: string = "Oricorio";
  public fullName: string = "Oricorio PR-SM SM19";
  public text: string = "Oricorio";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersEachOpponent(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
