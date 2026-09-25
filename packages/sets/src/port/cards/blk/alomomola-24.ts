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

export class Alomomola_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gentle Fin", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may put a Basic Pokémon with 70 HP or less from your discard pile onto your Bench.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Waterfall", cost: [], damage: "70", text: "" }
  ];
  public set: string = "BLK";
  public name: string = "Alomomola";
  public fullName: string = "Alomomola BLK 24";
  public text: string = "Alomomola";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
