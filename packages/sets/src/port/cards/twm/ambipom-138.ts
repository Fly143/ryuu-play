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

export class Ambipom_138 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Aipom";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wicked Tail", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may flip 2 coins. For each heads, choose a random card from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gentle Slap", cost: [], damage: "100", text: "" }
  ];
  public set: string = "TWM";
  public name: string = "Ambipom";
  public fullName: string = "Ambipom TWM 138";
  public text: string = "Ambipom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
