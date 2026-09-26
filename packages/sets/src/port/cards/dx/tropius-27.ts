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

export class Tropius_272 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tropical Motion", powerType: PowerType.ABILITY, text: "As long as Tropius is your Active Pokémon, your opponent's Active Pokémon have no Resistance.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Miracle Blow", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition." },
      { name: "Stomp", cost: [], damage: "40+", text: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage." }
  ];
  public set: string = "DX";
  public name: string = "Tropius";
  public fullName: string = "Tropius DX 27";
  public text: string = "Tropius";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
