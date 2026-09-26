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

export class Salamence_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shelgon";
  public hp: number = 140;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Battle Rush", powerType: PowerType.ABILITY, text: "If your opponent has any Pokémon in play that has maximum HP of 120 or more, ignore all Colorless Energy necessary to use Salamence's attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Combustion", cost: [], damage: "50", text: "" },
      { name: "Steam Twister", cost: [], damage: "120", text: "Discard a Fire Energy and a Water Energy attached to Salamence." }
  ];
  public set: string = "PL";
  public name: string = "Salamence";
  public fullName: string = "Salamence PL 24";
  public text: string = "Salamence";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
