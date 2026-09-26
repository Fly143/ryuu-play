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

export class AggronEx_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lairon";
  public hp: number = 150;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Intimidating Armor", powerType: PowerType.ABILITY, text: "As long as Aggron ex is your Active Pokémon, your opponent's Basic Pokémon can't attack or use any Poké-Powers or Poké-Bodies.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Split Bomb", cost: [], damage: "", text: "Choose 2 of your opponent's Pokémon. This attack doe 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Mega Burn", cost: [], damage: "100", text: "During your next turn, Aggron ex can't use Mega Burn." }
  ];
  public set: string = "CG";
  public name: string = "Aggron ex";
  public fullName: string = "Aggron ex CG 89";
  public text: string = "Aggron ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
