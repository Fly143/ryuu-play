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

export class WyrdeerV_134 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Frontier Road", powerType: PowerType.ABILITY, text: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may move any amount of Energy from your other Pokémon to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psyshield Bash", cost: [], damage: "40×", text: "This attack does 40 damage for each Energy attached to this Pokémon." }
  ];
  public set: string = "BRS";
  public name: string = "Wyrdeer V";
  public fullName: string = "Wyrdeer V BRS 134";
  public text: string = "Wyrdeer V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
