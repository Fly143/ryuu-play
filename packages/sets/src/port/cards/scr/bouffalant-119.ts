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

export class Bouffalant_119 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Curly Wall", powerType: PowerType.ABILITY, text: "As long as you have at least 1 other Bouffalant in play, all of your Basic Colorless Pokémon take 60 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). The effect of Curly Wall doesn't stack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Boundless Power", cost: [], damage: "130", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "SCR";
  public name: string = "Bouffalant";
  public fullName: string = "Bouffalant SCR 119";
  public text: string = "Bouffalant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 60);
    }
    return state;
  }
}
