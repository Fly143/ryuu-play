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

export class Indeedee_154 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Obliging Heal", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench during your turn, you may heal 30 damage from your Active Pokémon and have it recover from a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Super Psy Bolt", cost: [], damage: "50", text: "" }
  ];
  public set: string = "PR-SV";
  public name: string = "Indeedee";
  public fullName: string = "Indeedee PR-SV 154";
  public text: string = "Indeedee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
