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

export class TeamRocketSCrobatEx_242 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Golbat";
  public hp: number = 310;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Biting Spree", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may choose 2 of your opponent's Pokémon and put 2 damage counters on each of them.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Assassin's Return", cost: [], damage: "120", text: "You may put this Pokémon into your hand. (Discard all cards attached to this Pokémon.)" }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Crobat ex";
  public fullName: string = "Team Rocket's Crobat ex DRI 242";
  public text: string = "Team Rocket's Crobat ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
