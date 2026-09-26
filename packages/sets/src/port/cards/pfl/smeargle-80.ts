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

export class Smeargle_80 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energizing Sketch", cost: [], damage: "", text: "Flip 3 coins. Attach an amount of Basic Energy up to the number of heads from your discard pile to your Benched Pokémon in any way you like." },
      { name: "Hook", cost: [], damage: "40", text: "" }
  ];
  public set: string = "PFL";
  public name: string = "Smeargle";
  public fullName: string = "Smeargle PFL 80";
  public text: string = "Smeargle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
