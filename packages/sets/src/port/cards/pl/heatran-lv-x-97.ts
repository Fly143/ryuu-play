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

export class HeatranLVX_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Heatran";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Heat Metal", powerType: PowerType.ABILITY, text: "Your opponent can't remove the Special Condition Burned by evolving or devolving his or her Burned Pokémon. (This also includes putting a Pokémon Level-Up card onto the Burned Pokémon.) Whenever your opponent flips a coin for the Special Condition Burned between turns, treat it as tails.", useWhenInPlay: true },
      { name: "Heat Wave", powerType: PowerType.ABILITY, text: "Once at the end of your turn, if Heatran is on your Bench, you may use this power. If you discarded basic Energy cards attached to your Fire or Metal Active Pokémon by using that Pokémon's attack this turn, attach up to 2 of those Energy cards to that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "PL";
  public name: string = "Heatran LV.X";
  public fullName: string = "Heatran LV.X PL 97";
  public text: string = "Heatran LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
