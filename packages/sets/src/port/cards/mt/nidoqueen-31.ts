import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Nidoqueen_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nidorina";
  public hp: number = 120;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mother Pheromone", powerType: PowerType.ABILITY, text: "The attack cost of your Nidoran ♀, Nidorina, Nidoran ♂, Nidorino, and Nidoking's attacks is Colorless less.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Give Aid", cost: [], damage: "90", text: "If you have the same number of or less Benched Pokémon than your opponent, this attack's base damage is 50 instead of 90." }
  ];
  public set: string = "MT";
  public name: string = "Nidoqueen";
  public fullName: string = "Nidoqueen MT 31";
  public text: string = "Nidoqueen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
