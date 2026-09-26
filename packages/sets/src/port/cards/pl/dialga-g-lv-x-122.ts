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

export class DialgaGLVX_122 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dialga G";
  public hp: number = 120;
    public height?: number = 5.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Time Crystal", powerType: PowerType.ABILITY, text: "Each Pokémon (both yours and your opponent's) (excluding Pokémon SP) can't use any Poké-Bodies.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Remove Lost", cost: [], damage: "80", text: "Flip a coin until you get tails. For each heads, remove an Energy card attached to the Defending Pokémon and put it in the Lost Zone." }
  ];
  public set: string = "PL";
  public name: string = "Dialga G LV.X";
  public fullName: string = "Dialga G LV.X PL 122";
  public text: string = "Dialga G LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
