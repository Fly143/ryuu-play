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

export class Starmie_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Staryu";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Core Guard", powerType: PowerType.ABILITY, text: "As long as Starmie has any Psychic Energy attached to it, damage done to Starmie by attacks is reduced by 10 (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Flip", cost: [], damage: "", text: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) You may move an Energy attached to that Pokémon to another of your opponent's Pokémon." },
      { name: "Psychic Boom", cost: [], damage: "10+", text: "Does 10 damage plus 10 more damage for each Energy attached to the Defending Pokémon." }
  ];
  public set: string = "DX";
  public name: string = "Starmie";
  public fullName: string = "Starmie DX 48";
  public text: string = "Starmie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 10);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:10");
    }
    return state;
  }
}
