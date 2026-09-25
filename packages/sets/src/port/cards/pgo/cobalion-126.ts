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

export class Cobalion_126 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Justified Law", powerType: PowerType.ABILITY, text: "Your Basic Pokémon's attacks do 30 more damage to your opponent's Active Darkness Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Follow-Up", cost: [], damage: "30", text: "Choose up to 2 of your Benched Pokémon. For each of those Pokémon, search your deck for a basic Energy card and attach it to that Pokémon. Then, shuffle your deck." }
  ];
  public set: string = "PGO";
  public name: string = "Cobalion";
  public fullName: string = "Cobalion PGO 126";
  public text: string = "Cobalion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* plusPowerMarker:30 */ state;
    }
    return state;
  }
}
