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

export class JirachiEx_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Star Light", powerType: PowerType.ABILITY, text: "As long as your opponent has any Pokémon-ex or Stage 2 Evolved Pokémon in play, Jirachi ex pays Colorless less Energy to use Shield Beam or Super Psy Bolt.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shield Beam", cost: [], damage: "30", text: "During your opponent's next turn, your opponent can't use any Poké-Powers on his or her Pokémon." },
      { name: "Super Psy Bolt", cost: [], damage: "50", text: "" }
  ];
  public set: string = "CG";
  public name: string = "Jirachi ex";
  public fullName: string = "Jirachi ex CG 94";
  public text: string = "Jirachi ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
