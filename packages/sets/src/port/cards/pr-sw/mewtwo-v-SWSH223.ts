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

export class MewtwoVSWSH223 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Super Psy Bolt", cost: [], damage: "50", text: "" },
      { name: "Transfer Break", cost: [], damage: "160", text: "Move an Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Mewtwo V";
  public fullName: string = "Mewtwo V PR-SW SWSH223";
  public text: string = "Mewtwo V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    return state;
  }
}
