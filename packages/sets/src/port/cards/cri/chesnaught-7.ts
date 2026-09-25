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

export class Chesnaught_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Quilladin";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Needly Armor", powerType: PowerType.ABILITY, text: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), place 3 damage counters on the Attacking Pokémon for each Grass Energy attached to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Impound", cost: [], damage: "160", text: "During your opponent's next turn, the Defending Pokémon can't retreat." }
  ];
  public set: string = "CRI";
  public name: string = "Chesnaught";
  public fullName: string = "Chesnaught CRI 7";
  public text: string = "Chesnaught";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "roughSkin");
    }
    return state;
  }
}
