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

export class Ditto_172 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dittobolic", powerType: PowerType.ABILITY, text: "The number of Benched Pokémon your opponent can have is now 4. If your opponent has 5 Benched Pokémon, your opponent must discard 1 of them and all cards attached to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sharp Point", cost: [], damage: "20", text: "" }
  ];
  public set: string = "TM";
  public name: string = "Ditto";
  public fullName: string = "Ditto TM 17";
  public text: string = "Ditto";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
