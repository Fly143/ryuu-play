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

export class Deoxys_332 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Close Encounter", cost: [], damage: "", text: "If you go first, you can use this attack on your first turn. Draw 2 cards." },
      { name: "Overdrive Smash", cost: [], damage: "30", text: "During your next turn, this Pokémon's Overdrive Smash attack does 60 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "AOR";
  public name: string = "Deoxys";
  public fullName: string = "Deoxys AOR 33";
  public text: string = "Deoxys";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
