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

export class Flygon_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vibrava";
  public hp: number = 120;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Irritating Buzz", powerType: PowerType.ABILITY, text: "As long as Flygon is your Active Pokémon, put 1 damage counter on each of your opponent's Active Pokémon between turns, excluding Fighting Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sand Sonic", cost: [], damage: "60+", text: "If you attach a Fighting Energy card from your hand to Flygon during this turn, this attack does 60 damage plus 20 more damage." }
  ];
  public set: string = "SW";
  public name: string = "Flygon";
  public fullName: string = "Flygon SW 5";
  public text: string = "Flygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "roughSkin");
    }
    return state;
  }
}
