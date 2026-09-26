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

export class SilvallyGX_90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Type: Null";
  public hp: number = 210;
    public height?: number = 2.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gyro Unit", powerType: PowerType.ABILITY, text: "Your Basic Pokémon in play have no Retreat Cost.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Turbo Drive", cost: [], damage: "120", text: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon." },
      { name: "Rebel-GX", cost: [], damage: "50×", text: "This attack does 50 damage for each of your opponent's Benched Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CRI";
  public name: string = "Silvally-GX";
  public fullName: string = "Silvally-GX CRI 90";
  public text: string = "Silvally-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraNoRetreatCost");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraNoRetreatCost");
    }
    return state;
  }
}
