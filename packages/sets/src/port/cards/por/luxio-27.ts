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

export class Luxio_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shinx";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fighting Roar", powerType: PowerType.ABILITY, text: "If your opponent's Active Pokémon is a Pokémon ex, this Pokémon can evolve during your first turn or the turn you play it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Static Shock", cost: [], damage: "40", text: "" }
  ];
  public set: string = "POR";
  public name: string = "Luxio";
  public fullName: string = "Luxio POR 27";
  public text: string = "Luxio";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
