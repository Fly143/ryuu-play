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

export class ZeraoraVMAX_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zeraora V";
  public hp: number = 320;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Reactive Pulse", cost: [], damage: "60×", text: "This attack does 60 damage for each of your opponent's Pokémon in play that has an Ability." },
      { name: "Max Fist", cost: [], damage: "240", text: "Discard 2 Energy from this Pokémon." }
  ];
  public set: string = "CRZ";
  public name: string = "Zeraora VMAX";
  public fullName: string = "Zeraora VMAX CRZ 54";
  public text: string = "Zeraora VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerOwnBench(this, store, state, effect).use(effect, 60);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
