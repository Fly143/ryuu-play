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

export class Flareon_100 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Crimson Ray", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Flareon Star from your hand onto your Bench, you may use this power. Each Active Pokémon (both yours and your opponent's) is now Burned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flamethrower", cost: [], damage: "50", text: "Discard a Fire Energy attached to Flareon Star." }
  ];
  public set: string = "PK";
  public name: string = "Flareon ★";
  public fullName: string = "Flareon ★ PK 100";
  public text: string = "Flareon ★";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "specialBoth:CONFUSED");
    }
    return state;
  }
}
