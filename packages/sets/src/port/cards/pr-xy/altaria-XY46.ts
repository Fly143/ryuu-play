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

export class AltariaXY46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swablu";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Clear Humming", powerType: PowerType.ABILITY, text: "Each of your Colorless Pokémon has no Weakness.", useWhenInPlay: true },
      { name: "Δ Evolution", powerType: PowerType.ABILITY, text: "You may play this card from your hand to evolve a Pokémon during your first turn or the turn you play that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wing Attack", cost: [], damage: "30", text: "" }
  ];
  public set: string = "PR-XY";
  public name: string = "Altaria";
  public fullName: string = "Altaria PR-XY XY46";
  public text: string = "Altaria";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noWeakness");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noWeakness");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[1]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "earlyEvolution");
    }
    return state;
  }
}
