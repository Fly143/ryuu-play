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

export class Solrock_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Resistance Shade", powerType: PowerType.ABILITY, text: "If you have Lunatone in play, your opponent's Pokémon in play have no Resistance.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rock Throw", cost: [], damage: "30", text: "" }
  ];
  public set: string = "DAA";
  public name: string = "Solrock";
  public fullName: string = "Solrock DAA 92";
  public text: string = "Solrock";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
