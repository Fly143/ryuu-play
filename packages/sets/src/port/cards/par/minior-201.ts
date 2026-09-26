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

export class Minior_201 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Far-Flying Meteor", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is on your Bench, when you attach an Energy card from your hand to this Pokémon, you may switch it with your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gravitational Tackle", cost: [], damage: "20×", text: "This attack does 20 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." }
  ];
  public set: string = "PAR";
  public name: string = "Minior";
  public fullName: string = "Minior PAR 201";
  public text: string = "Minior";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
