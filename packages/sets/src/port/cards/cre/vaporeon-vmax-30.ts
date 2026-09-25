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

export class VaporeonVMAX_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vaporeon V";
  public hp: number = 320;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bubble Pod", cost: [], damage: "", text: "Put a Water Pokémon from your discard pile onto your Bench. If you do, attach up to 3 Water Energy cards from your discard pile to that Pokémon." },
      { name: "Max Torrent", cost: [], damage: "100+", text: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 100 more damage." }
  ];
  public set: string = "CRE";
  public name: string = "Vaporeon VMAX";
  public fullName: string = "Vaporeon VMAX CRE 30";
  public text: string = "Vaporeon VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscardToBench");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 100, 1);
    }
    return state;
  }
}
