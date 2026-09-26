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

export class Floette_151 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Flabébé";
  public hp: number = 70;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flower Picking", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may choose 2 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Magical Shot", cost: [], damage: "30", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Floette";
  public fullName: string = "Floette CEC 151";
  public text: string = "Floette";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
