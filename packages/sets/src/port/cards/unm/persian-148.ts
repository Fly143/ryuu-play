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

export class Persian_148 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meowth";
  public hp: number = 100;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gathering of Cats", powerType: PowerType.ABILITY, text: "Ignore all Energy in the attack costs of each of your Pokémon in play that has the Caturday attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Claw Slash", cost: [], damage: "90", text: "" }
  ];
  public set: string = "UNM";
  public name: string = "Persian";
  public fullName: string = "Persian UNM 148";
  public text: string = "Persian";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
