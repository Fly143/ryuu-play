import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
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

export class LugiaVSTAR_211 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lugia V";
  public hp: number = 280;
    public height?: number = 5.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Summoning Star", powerType: PowerType.ABILITY, text: "During your turn, you may put up to 2 Colorless Pokémon that don't have a Rule Box from your discard pile onto your Bench. (Pokémon V, Pokémon-GX, etc. have Rule Boxes.) (You can't use more than 1 VSTAR Power in a game.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tempest Dive", cost: [], damage: "220", text: "You may discard a Stadium in play." }
  ];
  public set: string = "PGO";
  public name: string = "Lugia VSTAR";
  public fullName: string = "Lugia VSTAR PGO 211";
  public text: string = "Lugia VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
