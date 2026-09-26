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

export class BombirdierEx_234 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fast Carrier", cost: [], damage: "", text: "If you go first, you can use this attack during your first turn. Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck." },
      { name: "Shadowy Wind", cost: [], damage: "130", text: "You may put this Pokémon and all attached cards into your hand." }
  ];
  public set: string = "PAR";
  public name: string = "Bombirdier ex";
  public fullName: string = "Bombirdier ex PAR 234";
  public text: string = "Bombirdier ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
