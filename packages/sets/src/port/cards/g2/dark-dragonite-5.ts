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
import { commonEffects } from '../../../common';

export class DarkDragonite_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Dragonair";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Summon Minions", powerType: PowerType.ABILITY, text: "When you play Dark Dragonite from your hand, search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Giant Tail", cost: [], damage: "70", text: "Flip a coin. If tails, this attack does nothing." }
  ];
  public set: string = "G2";
  public name: string = "Dark Dragonite";
  public fullName: string = "Dark Dragonite G2 5";
  public text: string = "Dark Dragonite";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* structural */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchBasicToBench:2");
    }
    return state;
  }
}
