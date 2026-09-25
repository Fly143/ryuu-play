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

export class Blissey_106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chansey";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Blissful Nurse", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Blissey from your hand to evolve 1 of your Pokémon, you may remove all damage counters from all of your Pokémon. If you do, discard all Energy attached to those Pokémon that had any damage counters on them.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Strength", cost: [], damage: "60", text: "" }
  ];
  public set: string = "HS";
  public name: string = "Blissey";
  public fullName: string = "Blissey HS 106";
  public text: string = "Blissey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
