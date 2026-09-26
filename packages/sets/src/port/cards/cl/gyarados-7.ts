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

export class Gyarados_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magikarp";
  public hp: number = 130;
    public height?: number = 6.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hydro Splash", cost: [], damage: "50", text: "" },
      { name: "Hyper Beam", cost: [], damage: "80", text: "Discard an Energy card attached to the Defending Pokémon." }
  ];
  public set: string = "CL";
  public name: string = "Gyarados";
  public fullName: string = "Gyarados CL 7";
  public text: string = "Gyarados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
