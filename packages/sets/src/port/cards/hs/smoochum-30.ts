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

export class Smoochum_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sweet Sleeping Face", powerType: PowerType.ABILITY, text: "As long as Smoochum is Asleep, prevent all damage done to Smoochum by attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Antics", cost: [], damage: "", text: "Move an Energy card attached to 1 of your opponent's Pokémon to another of your opponent's Pokémon. Smoochum is now Asleep." }
  ];
  public set: string = "HS";
  public name: string = "Smoochum";
  public fullName: string = "Smoochum HS 30";
  public text: string = "Smoochum";

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
