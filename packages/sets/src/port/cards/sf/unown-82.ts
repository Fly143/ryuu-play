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

export class Unown_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "?", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Unown ? is on your Bench, you may choose a Pokémon in your hand and put it face down. Your opponent guesses a type of that Pokémon. Reveal that card. If your opponent guessed wrong, draw a card. Then, put that card back into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "", text: "Discard up to 2 cards from your hand. For each card you discarded, draw a card." }
  ];
  public set: string = "SF";
  public name: string = "Unown [?]";
  public fullName: string = "Unown [?] SF 82";
  public text: string = "Unown [?]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
