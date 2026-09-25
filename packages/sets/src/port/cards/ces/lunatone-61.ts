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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Lunatone_61 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sol Shade", powerType: PowerType.ABILITY, text: "If you have Solrock in play, Fire Pokémon in play (both yours and your opponent's) have no Abilities, except Pokémon-GX and Pokémon-EX.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psyshock", cost: [], damage: "10", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." }
  ];
  public set: string = "CES";
  public name: string = "Lunatone";
  public fullName: string = "Lunatone CES 61";
  public text: string = "Lunatone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noPowers");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noPowers");
    }
    return state;
  }
}
