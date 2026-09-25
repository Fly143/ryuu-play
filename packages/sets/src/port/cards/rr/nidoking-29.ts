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

export class Nidoking_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nidorino";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Territoriality", powerType: PowerType.ABILITY, text: "If your Active Pokémon is damaged by an opponent's attack (even if that Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon. You can't put more than 2 damage counters in this way.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fling Away", cost: [], damage: "60", text: "If your opponent has any Benched Pokémon, this attack's base damage is 30 instead of 60 and this attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Giga Horn", cost: [], damage: "100", text: "Flip 2 coins. If both of them are tails, this attack does nothing." }
  ];
  public set: string = "RR";
  public name: string = "Nidoking";
  public fullName: string = "Nidoking RR 29";
  public text: string = "Nidoking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
