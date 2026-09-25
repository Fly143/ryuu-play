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

export class Swirlix_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Festival Lead", powerType: PowerType.ABILITY, text: "If Festival Grounds is in play, this Pokémon may use an attack it has twice. If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sneaky Placement", cost: [], damage: "", text: "Put 2 damage counters on 1 of your opponent's Pokémon." }
  ];
  public set: string = "TWM";
  public name: string = "Swirlix";
  public fullName: string = "Swirlix TWM 89";
  public text: string = "Swirlix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
