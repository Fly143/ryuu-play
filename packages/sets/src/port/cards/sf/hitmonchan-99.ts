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

export class Hitmonchan_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Counter Punch", cost: [], damage: "", text: "During your opponent's next turn, if Hitmonchan is damaged by an opponent's attack (even if Hitmonchan is Knocked Out), put 4 damage counters on the Attacking Pokémon." },
      { name: "Gut Strike", cost: [], damage: "30", text: "If Tyrogue is anywhere under Hitmonchan, this attack's base damage is 60 instead of 30." }
  ];
  public set: string = "SF";
  public name: string = "Hitmonchan";
  public fullName: string = "Hitmonchan SF 99";
  public text: string = "Hitmonchan";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putDamageCountersDefending(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
