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

export class Genesect_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "ACE Nullifier", powerType: PowerType.ABILITY, text: "If this Pokémon has a Pokémon Tool attached, your opponent can't play any ACE SPEC cards from their hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Magnetic Blast", cost: [], damage: "100", text: "" }
  ];
  public set: string = "SFA";
  public name: string = "Genesect";
  public fullName: string = "Genesect SFA 40";
  public text: string = "Genesect";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
