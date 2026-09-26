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

export class Luvdisc_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Love Call", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. Search your deck for a Pokémon that is the same type as the Pokémon you chose, show it to your opponent, and put it into your hand. Shuffle your deck afterward." },
      { name: "Sweet Kiss", cost: [], damage: "30", text: "Your opponent may draw a card." }
  ];
  public set: string = "PL";
  public name: string = "Luvdisc";
  public fullName: string = "Luvdisc PL 35";
  public text: string = "Luvdisc";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    return state;
  }
}
