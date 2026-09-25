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

export class UnownZ_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "ZERO", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Unown Z is on your Bench and you have no cards in your deck, you may discard all cards attached to Unown Z and put Unown Z on top of your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "", text: "Remove as many damage counters as you like from each Unown you have in play. Put that many damage counters on the Defending Pokémon." }
  ];
  public set: string = "SW";
  public name: string = "Unown [Z]";
  public fullName: string = "Unown [Z] SW 72";
  public text: string = "Unown [Z]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
