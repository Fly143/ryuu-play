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

export class RevavroomEx_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Varoom";
  public hp: number = 280;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Accelerator Flash", cost: [], damage: "20+", text: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 120 more damage." },
      { name: "Shattering Speed", cost: [], damage: "250", text: "Discard this Pokémon and all attached cards." }
  ];
  public set: string = "SFA";
  public name: string = "Revavroom ex";
  public fullName: string = "Revavroom ex SFA 81";
  public text: string = "Revavroom ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
