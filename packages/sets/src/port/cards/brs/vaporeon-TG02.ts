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

export class VaporeonTG02 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 110;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Torrential Awakening", powerType: PowerType.ABILITY, text: "If this Pokémon has a Memory Capsule attached, Fire Pokémon in play (both yours and your opponent's) have no Abilities.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aurora Beam", cost: [], damage: "70", text: "" }
  ];
  public set: string = "BRS";
  public name: string = "Vaporeon";
  public fullName: string = "Vaporeon BRS TG02";
  public text: string = "Vaporeon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noPowers");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noPowers");
    }
    return state;
  }
}
