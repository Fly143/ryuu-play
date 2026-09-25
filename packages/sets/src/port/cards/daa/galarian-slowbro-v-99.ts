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

export class GalarianSlowbroV_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rapid-Fire Poison", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent's Active Pokémon Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tripping Shot", cost: [], damage: "130", text: "During your opponent's next turn, the Defending Pokémon can't retreat." }
  ];
  public set: string = "DAA";
  public name: string = "Galarian Slowbro V";
  public fullName: string = "Galarian Slowbro V DAA 99";
  public text: string = "Galarian Slowbro V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
