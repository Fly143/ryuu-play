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

export class NoctowlSWSH027 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hoothoot";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wing Attack", cost: [], damage: "40", text: "" },
      { name: "Carry Off", cost: [], damage: "", text: "Choose 1 of your opponent's Benched Pokémon. They shuffle that Pokémon and all attached cards into their deck. Then, shuffle this Pokémon and all attached cards into your deck." }
  ];
  public set: string = "PR-SW";
  public name: string = "Noctowl";
  public fullName: string = "Noctowl PR-SW SWSH027";
  public text: string = "Noctowl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
