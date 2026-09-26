import {
  Effect,
  State,
  StoreLike,
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

export class GiratinaEX_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 4.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Renegade Pulse", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Mega Evolution Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Chaos Wheel", cost: [], damage: "100", text: "Your opponent can't play any Pokémon Tool, Special Energy, or Stadium cards from his or her hand during his or her next turn." }
  ];
  public set: string = "BKT";
  public name: string = "Giratina-EX";
  public fullName: string = "Giratina-EX BKT 57";
  public text: string = "Giratina-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "preventEffectsSelf");
    }
    return state;
  }
}
