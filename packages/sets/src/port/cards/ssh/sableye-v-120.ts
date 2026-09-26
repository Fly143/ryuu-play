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

export class SableyeV_120 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lode Search", cost: [], damage: "", text: "Put a Trainer card from your discard pile into your hand." },
      { name: "Crazy Claws", cost: [], damage: "10+", text: "This attack does 60 more damage for each damage counter on your opponent's Active Pokémon." }
  ];
  public set: string = "SSH";
  public name: string = "Sableye V";
  public fullName: string = "Sableye V SSH 120";
  public text: string = "Sableye V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscard");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerDefendingDamageCounter(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
