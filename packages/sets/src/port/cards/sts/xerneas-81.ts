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

export class Xerneas_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Geomancy", cost: [], damage: "", text: "Choose 2 of your Benched Pokémon. For each of those Pokémon, search your deck for a Fairy Energy card and attach it to that Pokémon. Shuffle your deck afterward." },
      { name: "Rainbow Spear", cost: [], damage: "100", text: "Discard an Energy attached to this Pokémon." }
  ];
  public set: string = "STS";
  public name: string = "Xerneas";
  public fullName: string = "Xerneas STS 81";
  public text: string = "Xerneas";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
