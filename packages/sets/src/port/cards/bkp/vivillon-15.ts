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

export class Vivillon_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spewpa";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Color", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sleep Powder", cost: [], damage: "60", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "BKP";
  public name: string = "Vivillon";
  public fullName: string = "Vivillon BKP 15";
  public text: string = "Vivillon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchEnergyToSelf");
    }
    return state;
  }
}
