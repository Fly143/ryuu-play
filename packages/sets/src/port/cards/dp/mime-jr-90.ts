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

export class MimeJr_90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Mr. Mime from your hand onto Mime Jr. (this counts as evolving Mime Jr.) and remove all damage counters from Mime Jr.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mime", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand." }
  ];
  public set: string = "DP";
  public name: string = "Mime Jr.";
  public fullName: string = "Mime Jr. DP 90";
  public text: string = "Mime Jr.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
