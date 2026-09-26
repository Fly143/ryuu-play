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

export class MegaGengarEx_269 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Haunter";
  public hp: number = 350;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shadowy Concealment", powerType: PowerType.ABILITY, text: "If 1 of your Darkness Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon ex, that player takes 1 fewer Prize card. The effect of Shadowy Concealment doesn't stack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Void Gale", cost: [], damage: "230", text: "Move an Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "ASC";
  public name: string = "Mega Gengar ex";
  public fullName: string = "Mega Gengar ex ASC 269";
  public text: string = "Mega Gengar ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "minusPrize:1");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "minusPrize:1");
    }
    return state;
  }
}
