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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Gloom_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Oddish";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Enervating Pollen", powerType: PowerType.ABILITY, text: "As long as Gloom is in play, Resistance on each player's Active Pokémon only reduces damage by 10.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sleep Sap", cost: [], damage: "20", text: "Both the Defending Pokémon and Gloom are now Asleep (after doing damage)." }
  ];
  public set: string = "AQ";
  public name: string = "Gloom";
  public fullName: string = "Gloom AQ 49";
  public text: string = "Gloom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialBoth(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
