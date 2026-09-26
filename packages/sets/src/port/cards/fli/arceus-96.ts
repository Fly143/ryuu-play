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

export class Arceus_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
    public height?: number = 3.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "First Law", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Trinity Star", cost: [], damage: "30", text: "You can use this attack only if you have Grass, Water, and Lightning Pokémon on your Bench. Search your deck for up to 3 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck." }
  ];
  public set: string = "FLI";
  public name: string = "Arceus ◇";
  public fullName: string = "Arceus ◇ FLI 96";
  public text: string = "Arceus ◇";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
