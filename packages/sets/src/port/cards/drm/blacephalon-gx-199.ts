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

export class BlacephalonGX_199 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bursting Burn", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Burned and Confused." },
      { name: "Mind Blown", cost: [], damage: "50×", text: "Put any amount of Fire Energy attached to your Pokémon in the Lost Zone. This attack does 50 damage for each card put in the Lost Zone in this way." },
      { name: "Burst-GX", cost: [], damage: "", text: "Discard 1 of your Prize cards. If it's an Energy card, attach it to 1 of your Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "DRM";
  public name: string = "Blacephalon-GX";
  public fullName: string = "Blacephalon-GX DRM 199";
  public text: string = "Blacephalon-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
