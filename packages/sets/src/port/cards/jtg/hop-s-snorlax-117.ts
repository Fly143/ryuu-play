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
import { commonEffects } from '../../../common';

export class HopSSnorlax_117 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Extra Helpings", powerType: PowerType.ABILITY, text: "Attacks used by your Hop's Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). The effect of Extra Helpings doesn't stack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dynamic Press", cost: [], damage: "140", text: "This Pokémon also does 80 damage to itself." }
  ];
  public set: string = "JTG";
  public name: string = "Hop's Snorlax";
  public fullName: string = "Hop's Snorlax JTG 117";
  public text: string = "Hop's Snorlax";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -80, 1);
    }
    return state;
  }
}
