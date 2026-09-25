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

export class EnamorusV_178 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Guardian of Love", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's Pokémon's Abilities done to each of your Pokémon that has any Psychic Energy attached, except any Enamorus V.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Blossom Tail", cost: [], damage: "100", text: "Attach up to 2 basic Energy cards from your discard pile to your Benched Pokémon in any way you like." }
  ];
  public set: string = "ASR";
  public name: string = "Enamorus V";
  public fullName: string = "Enamorus V ASR 178";
  public text: string = "Enamorus V";

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
