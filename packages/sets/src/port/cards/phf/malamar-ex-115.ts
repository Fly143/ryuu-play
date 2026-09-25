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

export class MalamarEX_115 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hyper Hypnosis", powerType: PowerType.ABILITY, text: "When you attach an Energy from your hand to this Pokémon, you may use this Ability. Your opponent's Active Pokémon is now Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "MAXamar", cost: [], damage: "60×", text: "Flip a coin for each Energy attached to this Pokémon. This attack does 60 damage times the number of heads." }
  ];
  public set: string = "PHF";
  public name: string = "Malamar-EX";
  public fullName: string = "Malamar-EX PHF 115";
  public text: string = "Malamar-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
