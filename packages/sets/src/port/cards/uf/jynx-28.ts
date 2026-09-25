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

export class Jynx_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stages of Evolution", powerType: PowerType.ABILITY, text: "As long as Jynx is an Evolved Pokémon, prevent all effects of opponent's attacks, except damage, done to Jynx, and Jynx has no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Freeze Light", cost: [], damage: "", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Burned." },
      { name: "Pure Power", cost: [], damage: "", text: "Put 4 damage counters on your opponent's Pokémon in any way you like." }
  ];
  public set: string = "UF";
  public name: string = "Jynx";
  public fullName: string = "Jynx UF 28";
  public text: string = "Jynx";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 40);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
