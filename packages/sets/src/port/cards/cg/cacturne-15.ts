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

export class Cacturne_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cacnea";
  public hp: number = 80;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Spike Storm", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Cacturne is your Active Pokémon, you may put 1 damage counter on 1 of your opponent's Pokémon that already has any damage counters on it. This power can't be used if Cacturne is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Triple Needle", cost: [], damage: "", text: "Choose 3 of your opponent's Pokémon. This attack does 10 damage to each of those Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Light Punch", cost: [], damage: "50", text: "" }
  ];
  public set: string = "CG";
  public name: string = "Cacturne δ";
  public fullName: string = "Cacturne δ CG 15";
  public text: string = "Cacturne δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchBasicToBench:1");
    }
    return state;
  }
}
