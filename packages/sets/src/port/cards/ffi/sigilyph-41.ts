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

export class Sigilyph_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Toolbox", powerType: PowerType.ABILITY, text: "This Pokémon may have up to 4 Pokémon Tool cards attached to it. (If this Pokémon loses this Ability, discard Pokémon Tool cards attached to this Pokémon until only 1 Pokémon Tool card remains.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cutting Wind", cost: [], damage: "70", text: "" }
  ];
  public set: string = "FFI";
  public name: string = "Sigilyph";
  public fullName: string = "Sigilyph FFI 41";
  public text: string = "Sigilyph";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "toolSlots:4");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "toolSlots:4");
    }
    return state;
  }
}
