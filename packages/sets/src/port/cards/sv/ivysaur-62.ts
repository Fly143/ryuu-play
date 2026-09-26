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

export class Ivysaur_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bulbasaur";
  public hp: number = 80;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Evolutionary Pollen", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Ivysaur from your hand to evolve 1 of your Pokémon, you may use this power. Your opponent's Active Pokémon is now Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cut", cost: [], damage: "50", text: "" }
  ];
  public set: string = "SV";
  public name: string = "Ivysaur";
  public fullName: string = "Ivysaur SV 62";
  public text: string = "Ivysaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
