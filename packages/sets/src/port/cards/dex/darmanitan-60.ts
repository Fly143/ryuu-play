import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Darmanitan_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Darumaka";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Synchrodraw", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand." },
      { name: "DarMAXitan", cost: [], damage: "50×", text: "Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage times the number of heads." }
  ];
  public set: string = "DEX";
  public name: string = "Darmanitan";
  public fullName: string = "Darmanitan DEX 60";
  public text: string = "Darmanitan";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
