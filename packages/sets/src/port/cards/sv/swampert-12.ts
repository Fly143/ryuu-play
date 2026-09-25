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

export class Swampert_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Marshtomp";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Root Protector", powerType: PowerType.ABILITY, text: "Any damage done to Swampert by attacks from your opponent's Pokémon that isn't an Evolved Pokémon is reduced by 20 (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Drag Off", cost: [], damage: "30", text: "Before doing damage, you may switch your opponent's Active Pokémon with 1 of his or her Benched Pokémon." },
      { name: "Push Over", cost: [], damage: "60+", text: "Does 60 damage plus 10 more damage for each Fighting Energy attached to Swampert." }
  ];
  public set: string = "SV";
  public name: string = "Swampert";
  public fullName: string = "Swampert SV 12";
  public text: string = "Swampert";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 20);
    }
    return state;
  }
}
