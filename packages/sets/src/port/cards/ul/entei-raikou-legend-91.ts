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

export class EnteiRaikouLEGEND_91 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Detonation Spin", cost: [], damage: "90", text: "Discard a Fire Energy attached to Entei & Raikou LEGEND." },
      { name: "Thunder Fall", cost: [], damage: "", text: "Discard all Energy attached to Entei & Raikou LEGEND. This attack does 80 damage to each Pokémon that has any Poké-Powers (both yours and your opponent's). This attack's damage isn't affected by Weakness or Resistance." }
  ];
  public set: string = "UL";
  public name: string = "Entei & Raikou LEGEND";
  public fullName: string = "Entei & Raikou LEGEND UL 91";
  public text: string = "Entei & Raikou LEGEND";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
