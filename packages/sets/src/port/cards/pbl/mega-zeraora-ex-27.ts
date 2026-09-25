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

export class MegaZeraoraEx_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Thunderous Fist", cost: [], damage: "60×", text: "This attack does 60 damage for each Lightning Energy attached to this Pokémon." },
      { name: "Zepto Turn", cost: [], damage: "150", text: "Switch this Pokémon with 1 of your Benched Pokémon." }
  ];
  public set: string = "PBL";
  public name: string = "Mega Zeraora ex";
  public fullName: string = "Mega Zeraora ex PBL 27";
  public text: string = "Mega Zeraora ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
