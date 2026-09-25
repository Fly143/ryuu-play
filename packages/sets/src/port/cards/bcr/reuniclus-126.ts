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

export class Reuniclus_126 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Duosion";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Damage Swap", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psywave", cost: [], damage: "30+", text: "Does 10 more damage for each Energy attached to the Defending Pokémon." }
  ];
  public set: string = "BCR";
  public name: string = "Reuniclus";
  public fullName: string = "Reuniclus BCR 126";
  public text: string = "Reuniclus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerEnergyDefending:10");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "moveDamageCounters");
    }
    return state;
  }
}
