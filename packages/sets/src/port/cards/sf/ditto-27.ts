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

export class Ditto_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ditto DNA", powerType: PowerType.ABILITY, text: "As long as Ditto is your Active Pokémon, its maximum HP is the same as your opponent's Active Pokémon. Ditto can use the attacks of that Pokémon as its own. (You still need the necessary Energy to use each attack.) If that Pokémon is no longer your opponent's Active Pokémon, choose 1 of your opponent's Active Pokémon for Ditto to copy.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "SF";
  public name: string = "Ditto";
  public fullName: string = "Ditto SF 27";
  public text: string = "Ditto";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
