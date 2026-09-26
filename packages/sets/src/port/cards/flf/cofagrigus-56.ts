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

export class Cofagrigus_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Yamask";
  public hp: number = 100;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Six Feet Under", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack) you may Knock Out this Pokémon. If you do, put 3 damage counters on your opponent's Pokémon in any way you like.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slap of Misfortune", cost: [], damage: "70", text: "Whenever your opponent flips a coin during his or her next turn, treat it as tails." }
  ];
  public set: string = "FLF";
  public name: string = "Cofagrigus";
  public fullName: string = "Cofagrigus FLF 56";
  public text: string = "Cofagrigus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "putCountersEachOpponent:30");
    }
    return state;
  }
}
