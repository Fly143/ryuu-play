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

export class Brambleghast_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bramblin";
  public hp: number = 100;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Prison Panic", powerType: PowerType.ABILITY, text: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Make your opponent's Active Pokémon Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Sphere", cost: [], damage: "80", text: "" }
  ];
  public set: string = "PFL";
  public name: string = "Brambleghast";
  public fullName: string = "Brambleghast PFL 47";
  public text: string = "Brambleghast";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
