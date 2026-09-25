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

export class TeamMagmaSClaydol_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Magma's Baltoy";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Magma Switch", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may move a basic Energy from 1 of your Pokémon to 1 of your Team Magma Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Power Beam", cost: [], damage: "70", text: "" }
  ];
  public set: string = "DCR";
  public name: string = "Team Magma's Claydol";
  public fullName: string = "Team Magma's Claydol DCR 11";
  public text: string = "Team Magma's Claydol";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
