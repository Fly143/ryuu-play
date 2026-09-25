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

export class Elekid_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Electabuzz from your hand onto Elekid (this counts as evolving Elekid) and remove all damage counters from Elekid.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Outlet", cost: [], damage: "", text: "Search your deck for a Lightning Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "DP";
  public name: string = "Elekid";
  public fullName: string = "Elekid DP 48";
  public text: string = "Elekid";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
