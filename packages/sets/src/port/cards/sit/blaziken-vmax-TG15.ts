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

export class BlazikenVMAXTG15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Blaziken V";
  public hp: number = 320;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Clutch", cost: [], damage: "60", text: "During your opponent's next turn, the Defending Pokémon can't retreat." },
      { name: "Max Blaze", cost: [], damage: "130", text: "Choose up to 2 of your Benched Rapid Strike Pokémon and attach an Energy card from your discard pile to each of them." }
  ];
  public set: string = "SIT";
  public name: string = "Blaziken VMAX";
  public fullName: string = "Blaziken VMAX SIT TG15";
  public text: string = "Blaziken VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
