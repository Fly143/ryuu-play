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

export class ArmarougeEx_218 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charcadet";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Crimson Armor", powerType: PowerType.ABILITY, text: "If this Pokémon has full HP, it takes 80 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Scorching Bazooka", cost: [], damage: "40+", text: "This attack does 40 more damage for each Fire Energy attached to this Pokémon." }
  ];
  public set: string = "PAR";
  public name: string = "Armarouge ex";
  public fullName: string = "Armarouge ex PAR 218";
  public text: string = "Armarouge ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 40);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 80);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:80");
    }
    return state;
  }
}
