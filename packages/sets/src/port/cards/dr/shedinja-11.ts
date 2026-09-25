import {
  Effect,
  State,
  StoreLike,
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

export class Shedinja_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nincada";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wonder Guard", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks, including damage, done to Shedinja by your opponent's Evolved Pokémon and Pokémon-ex.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Damage Curse", cost: [], damage: "", text: "Put 1 damage counter, plus 1 more damage counter for each damage counter on Shedinja, on the Defending Pokémon." }
  ];
  public set: string = "DR";
  public name: string = "Shedinja";
  public fullName: string = "Shedinja DR 11";
  public text: string = "Shedinja";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
