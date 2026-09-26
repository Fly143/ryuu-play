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

export class ChienPao_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Snow Sink", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Stadium in play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Icicle Loop", cost: [], damage: "120", text: "Put an Energy attached to this Pokémon into your hand." }
  ];
  public set: string = "SSP";
  public name: string = "Chien-Pao";
  public fullName: string = "Chien-Pao SSP 56";
  public text: string = "Chien-Pao";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
