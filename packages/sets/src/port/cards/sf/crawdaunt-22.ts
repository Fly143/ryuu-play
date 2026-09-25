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

export class Crawdaunt_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Corphish";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gripthrow", cost: [], damage: "", text: "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand." },
      { name: "Prop-up Pinchers", cost: [], damage: "50+", text: "If Crawdaunt has a Technical Machine card attached to it, this attack does 50 damage plus 30 more damage." }
  ];
  public set: string = "SF";
  public name: string = "Crawdaunt";
  public fullName: string = "Crawdaunt SF 22";
  public text: string = "Crawdaunt";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
