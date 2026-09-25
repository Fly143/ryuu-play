import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class GastrodonEastSea_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shellos East Sea";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sticky Hold", powerType: PowerType.ABILITY, text: "If Gastrodon East Sea is switched or retreats to your Bench, move as many Energy cards attached to Gastrodon East Sea as you like to the new Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Calling Wave", cost: [], damage: "", text: "Search your deck for up to 2 Gastrodon and put them onto your Bench as Basic Pokémon. Put 2 damage counters on each of them. Shuffle your deck afterward." },
      { name: "Wave Splash", cost: [], damage: "40", text: "" }
  ];
  public set: string = "RR";
  public name: string = "Gastrodon East Sea";
  public fullName: string = "Gastrodon East Sea RR 21";
  public text: string = "Gastrodon East Sea";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
