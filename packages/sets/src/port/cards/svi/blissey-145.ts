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

export class Blissey_145 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chansey";
  public hp: number = 150;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Busybody Nurse", powerType: PowerType.ABILITY, text: "Once during your turn, you may use this Ability. Your Active Pokémon recovers from all Special Conditions.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Happy Cyclone", cost: [], damage: "150", text: "Move all Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "SVI";
  public name: string = "Blissey";
  public fullName: string = "Blissey SVI 145";
  public text: string = "Blissey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
