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

export class Slowbro_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slowpoke";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dual Armor", powerType: PowerType.ABILITY, text: "As long as Slowbro has any Psychic Energy attached to it, Slowbro is both Water and Psychic type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Parallel Gain", cost: [], damage: "20", text: "Remove 1 damage counter from each of your Pokémon (including Slowbro)." },
      { name: "Rolling Tackle", cost: [], damage: "50", text: "" }
  ];
  public set: string = "UF";
  public name: string = "Slowbro";
  public fullName: string = "Slowbro UF 13";
  public text: string = "Slowbro";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
