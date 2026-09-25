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

export class RocketSScyther_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shadow Images", cost: [], damage: "", text: "Whenever Rocket's Scyther is attacked, your opponent flips a coin. If tails, that attack does no damage to Rocket's Scyther. (Any other effects of the attack still happen.) This effect lasts until Rocket's Scyther takes damage (or is Benched or is evolved)." },
      { name: "Blinding Scythe", cost: [], damage: "40", text: "" }
  ];
  public set: string = "G1";
  public name: string = "Rocket's Scyther";
  public fullName: string = "Rocket's Scyther G1 13";
  public text: string = "Rocket's Scyther";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
