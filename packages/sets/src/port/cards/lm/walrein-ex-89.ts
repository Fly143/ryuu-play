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

export class WalreinEx_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sealeo";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Icy Aura", powerType: PowerType.ABILITY, text: "As long as Walrein ex is your Active Pokémon, put 1 damage counter on each Active Pokémon (both yours and your opponent's) between turns, excluding Water Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Water Arrow", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Ice Throw", cost: [], damage: "80", text: "If the Defending Pokémon is a Fighting Pokémon, this attack's base damage is 120 instead of 80." }
  ];
  public set: string = "LM";
  public name: string = "Walrein ex";
  public fullName: string = "Walrein ex LM 89";
  public text: string = "Walrein ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 40);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
