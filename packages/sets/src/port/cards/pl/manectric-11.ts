import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  BetweenTurnsEffect,
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

export class Manectric_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Electrike";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Electric Barrier", powerType: PowerType.ABILITY, text: "Prevent all damage done to your Benched Pokémon (excluding any Manectric) by attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Power Wave", cost: [], damage: "", text: "This attack does 30 damage to each Pokémon that has any Poké-Powers (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Attract Current", cost: [], damage: "40", text: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward." }
  ];
  public set: string = "PL";
  public name: string = "Manectric";
  public fullName: string = "Manectric PL 11";
  public text: string = "Manectric";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraPreventEffects");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraPreventEffects");
    }
    return state;
  }
}
