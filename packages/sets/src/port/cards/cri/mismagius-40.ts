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

export class Mismagius_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Misdreavus";
  public hp: number = 110;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chaos Wheel", cost: [], damage: "30", text: "Your opponent can't play any Pokémon Tool, Special Energy, or Stadium cards from their hand during their next turn." },
      { name: "Dark Arts", cost: [], damage: "20×", text: "This attack does 20 damage for each card in your opponent's hand." }
  ];
  public set: string = "CRI";
  public name: string = "Mismagius";
  public fullName: string = "Mismagius CRI 40";
  public text: string = "Mismagius";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
