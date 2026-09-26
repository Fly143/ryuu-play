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

export class DarkOmastar_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Omanyte";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Prehistoric Water", cost: [], damage: "", text: "If your opponent has any evolved Pokémon in play, choose 1 of them and flip a coin. If heads, your opponent takes the highest Stage Evolution card on that Pokémon and shuffles it into his or her deck." },
      { name: "Dark Tentacle", cost: [], damage: "30", text: "During your opponent's next turn, the Defending Pokémon can't evolve except from effects of attacks or Pokémon Powers. (Benching that Pokémon ends this effect.)" }
  ];
  public set: string = "N4";
  public name: string = "Dark Omastar";
  public fullName: string = "Dark Omastar N4 19";
  public text: string = "Dark Omastar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
