import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class DarkIvysaur_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bulbasaur";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Vine Pull", powerType: PowerType.ABILITY, text: "Once during your turn when Dark Ivysaur retreats, choose 1 of your opponent's Benched Pokémon and switch it with his or her Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fury Strikes", cost: [], damage: "", text: "Your opponent puts 3 markers onto his or her Pokémon (divided as he or she chooses). (More than 1 marker can be put on the same Pokémon.) Then, this attack does 10 damage to each Pokémon for each marker on it. Don't apply Weakness and Resistance. Remove the markers at the end of the turn." }
  ];
  public set: string = "BP";
  public name: string = "Dark Ivysaur";
  public fullName: string = "Dark Ivysaur BP 6";
  public text: string = "Dark Ivysaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* gustOpponent */ state;
    }
    return state;
  }
}
