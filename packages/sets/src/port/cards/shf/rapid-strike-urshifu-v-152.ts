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

export class RapidStrikeUrshifuV_152 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Strafe", cost: [], damage: "30", text: "You may switch this Pokémon with 1 of your Benched Pokémon." },
      { name: "Hundred Furious Blows", cost: [], damage: "150", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Rapid Strike Urshifu V";
  public fullName: string = "Rapid Strike Urshifu V SHF 152";
  public text: string = "Rapid Strike Urshifu V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
