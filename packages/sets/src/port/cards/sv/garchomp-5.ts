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

export class Garchomp_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gabite";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dragon Intimidation", powerType: PowerType.ABILITY, text: "If Garchomp is your Active Pokémon and is damaged by an opponent's attack (even if Garchomp is Knocked Out), choose an Energy card attached to the Attacking Pokémon and put it into your opponent's hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Guard Claw", cost: [], damage: "40", text: "During your opponent's next turn, any damage done to Garchomp by attacks is reduced by 20 (after applying Weakness and Resistance)." },
      { name: "Speed Impact", cost: [], damage: "120-", text: "Does 120 damage minus 20 damage for each Energy attached to the Defending Pokémon." }
  ];
  public set: string = "SV";
  public name: string = "Garchomp";
  public fullName: string = "Garchomp SV 5";
  public text: string = "Garchomp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "minusPerEnergyDefending:20");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
