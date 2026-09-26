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

export class RayquazaEXXY69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mega Ascension", cost: [], damage: "", text: "Search your deck for M Rayquaza-EX, reveal it, and put it into your hand. Shuffle your deck afterward." },
      { name: "Aeroscream", cost: [], damage: "130", text: "Flip a coin. If tails, discard 2 Energy attached to this Pokémon." }
  ];
  public set: string = "PR-XY";
  public name: string = "Rayquaza-EX";
  public fullName: string = "Rayquaza-EX PR-XY XY69";
  public text: string = "Rayquaza-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
