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

export class Pichu_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Retrieval", cost: [], damage: "", text: "Search your discard pile for up to 2 basic Energy cards and attach them to 1 of your Pokémon. Put 1 damage counter on that Pokémon for each Energy card attached in this way." }
  ];
  public set: string = "SS";
  public name: string = "Pichu";
  public fullName: string = "Pichu SS 20";
  public text: string = "Pichu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
