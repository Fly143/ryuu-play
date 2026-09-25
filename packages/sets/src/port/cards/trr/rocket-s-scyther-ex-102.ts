import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class RocketSScytherEx_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dual Armor", powerType: PowerType.ABILITY, text: "As long as Rocket's Scyther ex has any Grass Energy attached to it, Rocket's Scyther ex is both Grass and Darkness type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bounce", cost: [], damage: "10", text: "After your attack, you may switch Rocket's Scyther ex with 1 of your Benched Pokémon." },
      { name: "Slashing Strike", cost: [], damage: "40", text: "Rocket's Scyther ex can't use Slashing Strike during your next turn." }
  ];
  public set: string = "TRR";
  public name: string = "Rocket's Scyther ex";
  public fullName: string = "Rocket's Scyther ex TRR 102";
  public text: string = "Rocket's Scyther ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* switchSelfAfterAttack */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
