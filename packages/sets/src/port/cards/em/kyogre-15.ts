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

export class Kyogre_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scary Face", cost: [], damage: "", text: "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn." },
      { name: "Hydro Pump", cost: [], damage: "40+", text: "Does 40 damage plus 10 more damage for each Water Energy attached to Kyogre but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way." }
  ];
  public set: string = "EM";
  public name: string = "Kyogre";
  public fullName: string = "Kyogre EM 15";
  public text: string = "Kyogre";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackOpponentNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
