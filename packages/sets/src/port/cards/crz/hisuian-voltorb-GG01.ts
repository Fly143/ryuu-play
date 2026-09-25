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

export class HisuianVoltorbGG01 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cheerful Charge", cost: [], damage: "", text: "You can use this attack only if you go second, and only during your first turn. Choose up to 2 of your Benched Pokémon. For each of those Pokémon, search your deck for a basic Energy card and attach it to that Pokémon. Then, shuffle your deck." },
      { name: "Ram", cost: [], damage: "10", text: "" }
  ];
  public set: string = "CRZ";
  public name: string = "Hisuian Voltorb";
  public fullName: string = "Hisuian Voltorb CRZ GG01";
  public text: string = "Hisuian Voltorb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
