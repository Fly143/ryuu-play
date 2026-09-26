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

export class Wigglytuff_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Jigglypuff";
  public hp: number = 80;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Assistance", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Wigglytuff is on your Bench, you may choose 1 of your Active Pokémon and remove 1 Special Condition from it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Expand", cost: [], damage: "30", text: "During your opponent's next turn, any damage done to Wigglytuff by attacks is reduced by 10 (after applying Weakness and Resistance)." }
  ];
  public set: string = "RG";
  public name: string = "Wigglytuff";
  public fullName: string = "Wigglytuff RG 52";
  public text: string = "Wigglytuff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
