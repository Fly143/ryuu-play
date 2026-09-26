import {
  Effect,
  State,
  StoreLike,
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

export class Huntail_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clamperl";
  public hp: number = 110;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Single Strike Jammer", powerType: PowerType.ABILITY, text: "Your opponent's Single Strike Pokémon's attacks cost Colorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cavernous Chomp", cost: [], damage: "80", text: "" }
  ];
  public set: string = "EVS";
  public name: string = "Huntail";
  public fullName: string = "Huntail EVS 66";
  public text: string = "Huntail";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "moreAttackCostOpponent");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "moreAttackCostOpponent");
    }
    return state;
  }
}
