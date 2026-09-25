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

export class HoopaVSWSH176 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Two-Faced", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in play, it is Psychic and Darkness type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shadow Impact", cost: [], damage: "170", text: "Put 3 damage counters on 1 of your Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Hoopa V";
  public fullName: string = "Hoopa V PR-SW SWSH176";
  public text: string = "Hoopa V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
