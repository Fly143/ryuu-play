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

export class Linoone_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zigzagoon";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Excited Dash", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is on your Bench, and if you have any Mega Evolution Pokémon ex in play, you may use this Ability. Switch this Pokémon with your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slash", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PFL";
  public name: string = "Linoone";
  public fullName: string = "Linoone PFL 82";
  public text: string = "Linoone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
