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

export class RocketSSnorlaxEx_104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Healer", powerType: PowerType.ABILITY, text: "As long as Rocket's Snorlax ex has any Darkness Energy attached to it, remove 1 damage counter from Rocket's Snorlax ex between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Claws", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon is now Poisoned." },
      { name: "Collapse", cost: [], damage: "60", text: "Rocket's Snorlax ex is now Asleep." }
  ];
  public set: string = "TRR";
  public name: string = "Rocket's Snorlax ex";
  public fullName: string = "Rocket's Snorlax ex TRR 104";
  public text: string = "Rocket's Snorlax ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
