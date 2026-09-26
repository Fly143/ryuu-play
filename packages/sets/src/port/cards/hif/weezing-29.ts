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

export class Weezing_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Koffing";
  public hp: number = 120;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Surrender Now", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is discarded with the effect of Jessie & James, you may have your opponent discard a card from their hand. (They discard that card after the effect of Jessie & James.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tackle", cost: [], damage: "40", text: "" }
  ];
  public set: string = "HIF";
  public name: string = "Weezing";
  public fullName: string = "Weezing HIF 29";
  public text: string = "Weezing";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
