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

export class Magcargo_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slugma";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Streaming Mantle", powerType: PowerType.ABILITY, text: "When you play Magcargo from your hand to evolve your Active Pokémon, you may discard the top 3 cards of your deck and and then shuffle 3 basic Energy cards from your discard pile into your deck. If you do, your opponent does the same.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crushing Lava", cost: [], damage: "40+", text: "You may discard a Fire or Fighting basic Energy card attached to Magcargo. If you discard a Fire Energy card in this way, the Defending Pokémon is now Burned. If you discard a Fighting Energy card in this way, this attack does 40 damage plus 20 more damage." }
  ];
  public set: string = "SK";
  public name: string = "Magcargo";
  public fullName: string = "Magcargo SK 18";
  public text: string = "Magcargo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
