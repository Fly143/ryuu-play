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

export class VictiniEX_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Turbo Energize", cost: [], damage: "", text: "Search your deck for 2 basic Energy cards and attach them to your Benched Pokémon in any way you like. Shuffle your deck afterward." },
      { name: "Intensifying Burn", cost: [], damage: "50+", text: "If the Defending Pokémon is a Pokémon-EX, this attack does 50 more damage." }
  ];
  public set: string = "PLB";
  public name: string = "Victini-EX";
  public fullName: string = "Victini-EX PLB 18";
  public text: string = "Victini-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 1);
    }
    return state;
  }
}
