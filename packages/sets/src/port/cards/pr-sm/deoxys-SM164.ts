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

export class DeoxysSM164 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Power Suction", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may move an Energy from 1 of your Pokémon to 1 of your Deoxys.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psycho Boost", cost: [], damage: "100", text: "During your next turn, this Pokémon's Psycho Boost attack's base damage is 50." }
  ];
  public set: string = "PR-SM";
  public name: string = "Deoxys";
  public fullName: string = "Deoxys PR-SM SM164";
  public text: string = "Deoxys";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
