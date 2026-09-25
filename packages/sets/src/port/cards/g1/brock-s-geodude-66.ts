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

export class BrockSGeodude_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Call for Friend", cost: [], damage: "", text: "Flip a coin. If heads, you may search your deck for a Basic Pokémon card with Brock in its name and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)" },
      { name: "Hook Shot", cost: [], damage: "20", text: "Don't apply Resistance for this attack. (Any other effects that would happen after applying Resistance still happen.)" }
  ];
  public set: string = "G1";
  public name: string = "Brock's Geodude";
  public fullName: string = "Brock's Geodude G1 66";
  public text: string = "Brock's Geodude";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
