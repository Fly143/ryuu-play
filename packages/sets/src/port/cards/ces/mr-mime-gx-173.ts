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

export class MrMimeGX_173 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Magic Evens", powerType: PowerType.ABILITY, text: "Prevent all damage done to this Pokémon by your opponent's attacks if that damage is exactly 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, or 260.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Breakdown", cost: [], damage: "", text: "For each card in your opponent's hand, put 1 damage counter on their Active Pokémon." },
      { name: "Life Trick-GX", cost: [], damage: "", text: "Heal all damage from this Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CES";
  public name: string = "Mr. Mime-GX";
  public fullName: string = "Mr. Mime-GX CES 173";
  public text: string = "Mr. Mime-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraPreventEffects");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraPreventEffects");
    }
    return state;
  }
}
