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

export class HonchkrowGX_109 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Murkrow";
  public hp: number = 210;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ruler of the Night", powerType: PowerType.ABILITY, text: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Pokémon Tool, Special Energy, or Stadium cards from their hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Feather Storm", cost: [], damage: "90", text: "This attack does 30 damage to 2 of your opponent's Benched Pokémon-GX and Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Unfair-GX", cost: [], damage: "", text: "Your opponent reveals their hand. Discard 2 cards from it. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UNM";
  public name: string = "Honchkrow-GX";
  public fullName: string = "Honchkrow-GX UNM 109";
  public text: string = "Honchkrow-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTwoOpponentBench(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noTrainers");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noTrainers");
    }
    return state;
  }
}
