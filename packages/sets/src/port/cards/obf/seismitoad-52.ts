import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Seismitoad_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Palpitoad";
  public hp: number = 170;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Quaking Zone", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon cost Colorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Echoed Voice", cost: [], damage: "120", text: "During your next turn, this Pokémon's Echoed Voice attack does 100 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "OBF";
  public name: string = "Seismitoad";
  public fullName: string = "Seismitoad OBF 52";
  public text: string = "Seismitoad";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
