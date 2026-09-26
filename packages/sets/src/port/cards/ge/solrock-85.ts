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

export class Solrock_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sunlight", powerType: PowerType.ABILITY, text: "If you have Lunatone in play, damage done to your opponent's Pokémon by your Psychic or Fighting Pokémon isn't affected by resistance.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sol Charge", cost: [], damage: "20", text: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon." }
  ];
  public set: string = "GE";
  public name: string = "Solrock";
  public fullName: string = "Solrock GE 85";
  public text: string = "Solrock";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
