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

export class DrapionLVX_123 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drapion";
  public hp: number = 130;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tri-Poison", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. Put 3 damage counters instead of 1 on that Pokémon between turns. This power can't be used if Drapion is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sniping Tail", cost: [], damage: "40", text: "Does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) The Defending Pokémon can't retreat during your opponent's next turn." }
  ];
  public set: string = "PL";
  public name: string = "Drapion LV.X";
  public fullName: string = "Drapion LV.X PL 123";
  public text: string = "Drapion LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
