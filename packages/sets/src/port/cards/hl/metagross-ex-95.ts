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

export class MetagrossEx_952 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Metang";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Metal Reversal", cost: [], damage: "40", text: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. If you do, this attack does 40 damage to the new Defending Pokémon." },
      { name: "Extra Comet Punch", cost: [], damage: "50+", text: "During your next turn, Extra Comet Punch does 50 damage plus 50 more damage." }
  ];
  public set: string = "HL";
  public name: string = "Metagross ex";
  public fullName: string = "Metagross ex HL 95";
  public text: string = "Metagross ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
