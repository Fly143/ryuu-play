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

export class Poliwag_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Round ‘n' Round", powerType: PowerType.ABILITY, text: "You can use this Ability only if you go second. Once during your first turn (before your attack), you may leave your opponent's Active Pokémon Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Watering", cost: [], damage: "10", text: "" }
  ];
  public set: string = "UNM";
  public name: string = "Poliwag";
  public fullName: string = "Poliwag UNM 36";
  public text: string = "Poliwag";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
