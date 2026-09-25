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

export class AlolanVulpixV_173 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "White Drop", cost: [], damage: "10+", text: "If your opponent's Active Pokémon is a Pokémon V, this attack does 50 more damage." },
      { name: "Frost Smash", cost: [], damage: "110", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Alolan Vulpix V";
  public fullName: string = "Alolan Vulpix V PGO 173";
  public text: string = "Alolan Vulpix V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 1);
    }
    return state;
  }
}
