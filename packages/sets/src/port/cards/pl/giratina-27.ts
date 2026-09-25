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

export class Giratina_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Strafe", cost: [], damage: "20", text: "You may switch Giratina with 1 of your Benched Pokémon." },
      { name: "Broken-space Blow", cost: [], damage: "50", text: "If the Defending Pokémon is Knocked Out by this attack, put the Defending Pokémon and all cards attached to in the Lost Zone instead of the discard pile." }
  ];
  public set: string = "PL";
  public name: string = "Giratina";
  public fullName: string = "Giratina PL 27";
  public text: string = "Giratina";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
