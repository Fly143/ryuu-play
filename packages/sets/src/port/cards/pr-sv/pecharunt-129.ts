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

export class Pecharunt_129 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Toxic Subjugation", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, put 5 more damage counters on your opponent's Poisoned Pokémon during Pokémon Checkup.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Chain", cost: [], damage: "10", text: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat." }
  ];
  public set: string = "PR-SV";
  public name: string = "Pecharunt";
  public fullName: string = "Pecharunt PR-SV 129";
  public text: string = "Pecharunt";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
