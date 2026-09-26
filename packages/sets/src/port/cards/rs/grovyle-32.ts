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

export class Grovyle_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Treecko";
  public hp: number = 80;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Natural Cure", powerType: PowerType.ABILITY, text: "When you attach a Grass Energy card from your hand to Grovyle, remove all Special Conditions from Grovyle.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slash", cost: [], damage: "20", text: "" }
  ];
  public set: string = "RS";
  public name: string = "Grovyle";
  public fullName: string = "Grovyle RS 32";
  public text: string = "Grovyle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
