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

export class Falinks_109 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Call for Family", cost: [], damage: "", text: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck." },
      { name: "Team Attack", cost: [], damage: "30×", text: "This attack does 30 damage for each of your Benched Pokémon that has \"Falinks\" in its name." }
  ];
  public set: string = "RCL";
  public name: string = "Falinks";
  public fullName: string = "Falinks RCL 109";
  public text: string = "Falinks";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
