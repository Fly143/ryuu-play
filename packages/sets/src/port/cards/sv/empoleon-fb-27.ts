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

export class EmpoleonFB_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rushing Water", cost: [], damage: "20", text: "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon." },
      { name: "Escort", cost: [], damage: "40+", text: "If you played any Supporter card from your hand during this turn, this attack does 40 damage plus 20 more damage." }
  ];
  public set: string = "SV";
  public name: string = "Empoleon FB";
  public fullName: string = "Empoleon FB SV 27";
  public text: string = "Empoleon FB";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    return state;
  }
}
