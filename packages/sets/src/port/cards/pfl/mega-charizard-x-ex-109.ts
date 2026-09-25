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

export class MegaCharizardXEx_109 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmeleon";
  public hp: number = 360;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Inferno X", cost: [], damage: "90×", text: "Discard any amount of Fire Energy from among your Pokémon, and this attack does 90 damage for each card you discarded in this way." }
  ];
  public set: string = "PFL";
  public name: string = "Mega Charizard X ex";
  public fullName: string = "Mega Charizard X ex PFL 109";
  public text: string = "Mega Charizard X ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
