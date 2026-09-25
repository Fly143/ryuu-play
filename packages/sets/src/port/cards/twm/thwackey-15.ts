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

export class Thwackey_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grookey";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Boom Boom Groove", powerType: PowerType.ABILITY, text: "Once during your turn, if your Active Pokémon has the Festival Lead Ability, you may search your deck for a card and put it into your hand. Then, shuffle your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Beat", cost: [], damage: "50", text: "" }
  ];
  public set: string = "TWM";
  public name: string = "Thwackey";
  public fullName: string = "Thwackey TWM 15";
  public text: string = "Thwackey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
