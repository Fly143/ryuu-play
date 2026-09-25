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

export class Exeggcute_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Propagation", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put this Pokémon into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Seed Bomb", cost: [], damage: "20", text: "" }
  ];
  public set: string = "FLF";
  public name: string = "Exeggcute";
  public fullName: string = "Exeggcute FLF 4";
  public text: string = "Exeggcute";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
