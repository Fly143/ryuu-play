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

export class Abra_80 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Teleporter", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may shuffle it and all attached cards into your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Beam", cost: [], damage: "10", text: "" }
  ];
  public set: string = "TWM";
  public name: string = "Abra";
  public fullName: string = "Abra TWM 80";
  public text: string = "Abra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
