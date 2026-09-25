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

export class Honchkrow_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Murkrow";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Insomnia", powerType: PowerType.ABILITY, text: "This Pokémon can't be Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Voltage Dive", cost: [], damage: "80+", text: "If your opponent's Active Pokémon has any Special Energy attached, this attack does 80 more damage." }
  ];
  public set: string = "SHF";
  public name: string = "Honchkrow";
  public fullName: string = "Honchkrow SHF 94";
  public text: string = "Honchkrow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    return state;
  }
}
