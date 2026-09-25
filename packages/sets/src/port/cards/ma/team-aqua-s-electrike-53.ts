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

export class TeamAquaSElectrike_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Self Charge", cost: [], damage: "", text: "Attach an Energy card from your hand to Team Aqua's Electrike." },
      { name: "Tackle", cost: [], damage: "20", text: "" }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Electrike";
  public fullName: string = "Team Aqua's Electrike MA 53";
  public text: string = "Team Aqua's Electrike";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
