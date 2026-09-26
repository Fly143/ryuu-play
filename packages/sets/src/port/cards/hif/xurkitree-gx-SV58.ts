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

export class XurkitreeGXSV58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 3.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flashing Head", powerType: PowerType.ABILITY, text: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have any Special Energy attached to them.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rumbling Wires", cost: [], damage: "100", text: "Discard the top card of your opponent's deck." },
      { name: "Lighting-GX", cost: [], damage: "", text: "Your opponent reveals their hand. Add a card you find there to their Prize cards face down. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "HIF";
  public name: string = "Xurkitree-GX";
  public fullName: string = "Xurkitree-GX HIF SV58";
  public text: string = "Xurkitree-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
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
