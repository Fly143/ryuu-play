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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SnorlaxGXSM05 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Collapse", cost: [], damage: "80", text: "This Pokémon is now Asleep." },
      { name: "Thunderous Snore", cost: [], damage: "180", text: "This attack can be used if this Pokémon is Asleep. If it is not Asleep, this attack does nothing." },
      { name: "Pulverizing Pancake-GX", cost: [], damage: "210", text: "This Pokémon is now Asleep. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "PR-SM";
  public name: string = "Snorlax-GX";
  public fullName: string = "Snorlax-GX PR-SM SM05";
  public text: string = "Snorlax-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
