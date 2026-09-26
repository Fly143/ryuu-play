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

export class Golduck_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Psyduck";
  public hp: number = 70;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Chaos Flash", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Golduck is your Active Pokémon, you may flip a coin. If heads, the Defending Pokémon (choose 1 if there are 2) is now Confused. This power can't be used if Golduck is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Special Blow", cost: [], damage: "30+", text: "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 30 damage plus 40 more damage." }
  ];
  public set: string = "SS";
  public name: string = "Golduck";
  public fullName: string = "Golduck SS 17";
  public text: string = "Golduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "flipHeadsDraw:1");
    }
    return state;
  }
}
