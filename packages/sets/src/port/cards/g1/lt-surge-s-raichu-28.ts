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

export class LtSurgeSRaichu_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lt. Surge's Pikachu";
  public hp: number = 70;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mega Punch", cost: [], damage: "30", text: "" },
      { name: "Thunderbolt", cost: [], damage: "100", text: "Discard all Energy cards attached to Lt. Surge's Raichu in order to use this attack." }
  ];
  public set: string = "G1";
  public name: string = "Lt. Surge's Raichu";
  public fullName: string = "Lt. Surge's Raichu G1 28";
  public text: string = "Lt. Surge's Raichu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
