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

export class Drednaw_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chewtle";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Impervious Shell", powerType: PowerType.ABILITY, text: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon if that damage is 200 or more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hard Crunch", cost: [], damage: "80+", text: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage." }
  ];
  public set: string = "SCR";
  public name: string = "Drednaw";
  public fullName: string = "Drednaw SCR 44";
  public text: string = "Drednaw";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
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
