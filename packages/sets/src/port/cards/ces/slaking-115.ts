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

export class Slaking_115 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vigoroth";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lazy", powerType: PowerType.ABILITY, text: "As long as this Pokémon is your Active Pokémon, your opponent's Pokémon in play have no Abilities, except for Lazy.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Critical Move", cost: [], damage: "160", text: "Discard an Energy from this Pokémon. It can't attack during your next turn." }
  ];
  public set: string = "CES";
  public name: string = "Slaking";
  public fullName: string = "Slaking CES 115";
  public text: string = "Slaking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
