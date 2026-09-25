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

export class Metagross_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Metang";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Extend", powerType: PowerType.ABILITY, text: "As long as this Pokémon is your Active Pokémon, your turn does not end when you play Steven's Resolve.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Meteor Mash", cost: [], damage: "60", text: "During your next turn, this Pokémon's Meteor Mash attack does 60 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "CES";
  public name: string = "Metagross";
  public fullName: string = "Metagross CES 95";
  public text: string = "Metagross";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
