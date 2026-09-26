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

export class Phantump_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Spiteful Evolution", powerType: PowerType.ABILITY, text: "Once during your turn, you may use this Ability. Choose a card in your hand that evolves from this Pokémon and put it onto this Pokémon to evolve it. If you do, place 2 damage counters on the Pokémon you evolved in this way. You can't use this Ability during your first turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mumble", cost: [], damage: "10", text: "" }
  ];
  public set: string = "CRI";
  public name: string = "Phantump";
  public fullName: string = "Phantump CRI 38";
  public text: string = "Phantump";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
