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

export class Wynaut_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Wobbuffet from your hand onto Wynaut (this counts as evolving Wynaut), and remove all damage counters from Wynaut.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Alluring Smile", cost: [], damage: "", text: "Search your deck for a Basic Pokémon card or Evolution card for each Energy attached to Wynaut, show them to your opponent, and put them into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "SS";
  public name: string = "Wynaut";
  public fullName: string = "Wynaut SS 54";
  public text: string = "Wynaut";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
