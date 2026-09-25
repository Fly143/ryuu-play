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

export class Abomasnow_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snover";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Snow Veil", powerType: PowerType.ABILITY, text: "As long as Abomasnow is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 20 (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Snow Play", cost: [], damage: "20", text: "Does 20 damage to each of your opponent's Benched Pokémon, excluding Grass Pokémon and Water Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Below Zero", cost: [], damage: "60", text: "If Abomasnow evolved from Snover during this turn, the Defending Pokémon is now Paralyzed." }
  ];
  public set: string = "PL";
  public name: string = "Abomasnow";
  public fullName: string = "Abomasnow PL 12";
  public text: string = "Abomasnow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 20);
    }
    return state;
  }
}
