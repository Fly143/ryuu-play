import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class GenesectGX_130 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Double Drive", powerType: PowerType.ABILITY, text: "This Pokémon may have up to 2 Pokémon Tool cards attached to it. If it loses this Ability, discard Pokémon Tool cards from it until only 1 remains.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Burst Shot", cost: [], damage: "130", text: "" },
      { name: "Break Buster-GX", cost: [], damage: "190", text: "This attack's damage isn't affected by Resistance. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "DRM";
  public name: string = "Genesect-GX";
  public fullName: string = "Genesect-GX DRM 130";
  public text: string = "Genesect-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "toolSlots:2");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "toolSlots:2");
    }
    return state;
  }
}
