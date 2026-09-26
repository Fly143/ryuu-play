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

export class AerodactylGX_244 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Unidentified Fossil";
  public hp: number = 210;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Primal Winds", powerType: PowerType.ABILITY, text: "As long as this Pokémon is your Active Pokémon, your opponent's Basic Pokémon's attacks cost Colorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Boulder Crush", cost: [], damage: "120", text: "" },
      { name: "Wild Dive-GX", cost: [], damage: "50×", text: "This attack does 50 damage times the amount of Energy attached to your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Aerodactyl-GX";
  public fullName: string = "Aerodactyl-GX CEC 244";
  public text: string = "Aerodactyl-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "moreAttackCostOpponent");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "moreAttackCostOpponent");
    }
    return state;
  }
}
