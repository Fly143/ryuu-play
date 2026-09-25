import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Rayquaza_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hydro Barrier", powerType: PowerType.ABILITY, text: "As long as Rayquaza has any Holon Energy cards attached to it, each of your Water Pokémon has no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Delta Search", cost: [], damage: "", text: "Search your deck for a Holon Energy card and attach it to Rayquaza. Shuffle your deck afterward." },
      { name: "Ozone Flare", cost: [], damage: "60", text: "" }
  ];
  public set: string = "HP";
  public name: string = "Rayquaza δ";
  public fullName: string = "Rayquaza δ HP 16";
  public text: string = "Rayquaza δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
