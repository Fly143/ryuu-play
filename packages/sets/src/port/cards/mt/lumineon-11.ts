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

export class Lumineon_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Finneon";
  public hp: number = 80;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lure Ring", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Lumineon is your Active Pokémon, you may choose 1 of your opponent's Benched Pokémon that has a maximum HP of 100 or more and switch it with 1 of the Defending Pokémon. This power can't be used if Lumineon is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Reverse Stream", cost: [], damage: "30+", text: "Does 30 damage plus 10 more damage for each Water Energy attached to Lumineon. Then, return all Water Energy attached to Lumineon to your hand." }
  ];
  public set: string = "MT";
  public name: string = "Lumineon";
  public fullName: string = "Lumineon MT 11";
  public text: string = "Lumineon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "putDamageCounters:1");
    }
    return state;
  }
}
