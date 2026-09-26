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

export class Pachirisu_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electrified Incisors", cost: [], damage: "10", text: "During your opponent's next turn, whenever they attach an Energy card from their hand to the Defending Pokémon, place 8 damage counters on that Pokémon." }
  ];
  public set: string = "MEG";
  public name: string = "Pachirisu";
  public fullName: string = "Pachirisu MEG 51";
  public text: string = "Pachirisu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
