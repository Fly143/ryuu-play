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

export class Bunnelby_121 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ω Barrage", powerType: PowerType.ABILITY, text: "This Pokémon may attack twice a turn. (If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Burrow", cost: [], damage: "", text: "Discard the top card of your opponent's deck." },
      { name: "Rototiller", cost: [], damage: "", text: "Shuffle a card from your discard pile into your deck." }
  ];
  public set: string = "ROS";
  public name: string = "Bunnelby";
  public fullName: string = "Bunnelby ROS 121";
  public text: string = "Bunnelby";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
