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

export class ArticunoEx_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Synchronized Lift", powerType: PowerType.ABILITY, text: "As long as you have Zapdos ex and Moltres ex in play, the Retreat Cost for Articuno ex is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ice Gift", cost: [], damage: "10", text: "You may move a Water Energy attached to Articuno ex to 1 of your Pokémon." },
      { name: "Freezing Wing", cost: [], damage: "50", text: "Flip a coin. If heads, the Defending Pokémon is now Asleep." }
  ];
  public set: string = "PR-NP";
  public name: string = "Articuno ex";
  public fullName: string = "Articuno ex PR-NP 32";
  public text: string = "Articuno ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
