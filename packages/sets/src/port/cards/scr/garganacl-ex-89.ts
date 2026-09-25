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

export class GarganaclEx_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Naclstack";
  public hp: number = 340;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Salty Body", powerType: PowerType.ABILITY, text: "This Pokémon can't be affected by any Special Conditions.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Block Hammer", cost: [], damage: "170", text: "During your opponent's next turn, this Pokémon takes 60 less damage from attacks (after applying Weakness and Resistance)." }
  ];
  public set: string = "SCR";
  public name: string = "Garganacl ex";
  public fullName: string = "Garganacl ex SCR 89";
  public text: string = "Garganacl ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 60);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "immuneToSpecial");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "immuneToSpecial");
    }
    return state;
  }
}
