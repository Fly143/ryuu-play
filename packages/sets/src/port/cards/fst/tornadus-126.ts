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

export class Tornadus_126 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sudden Cyclone", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench, you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Blasting Wind", cost: [], damage: "100", text: "" }
  ];
  public set: string = "FST";
  public name: string = "Tornadus";
  public fullName: string = "Tornadus FST 126";
  public text: string = "Tornadus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
