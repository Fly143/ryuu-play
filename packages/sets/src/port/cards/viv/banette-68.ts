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

export class Banette_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shuppet";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Curse of Devolution", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may devolve 1 of your opponent's Benched evolved Pokémon by putting the highest Stage Evolution card on it into your opponent's hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spooky Shot", cost: [], damage: "40", text: "" }
  ];
  public set: string = "VIV";
  public name: string = "Banette";
  public fullName: string = "Banette VIV 68";
  public text: string = "Banette";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
