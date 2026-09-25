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

export class Clawitzer_141 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clauncher";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fall Back to Reload", powerType: PowerType.ABILITY, text: "Once during your turn, when this Pokémon moves from the Active Spot to your Bench, you may use this Ability. Attach up to 2 Basic Water Energy cards from your hand to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aqua Launcher", cost: [], damage: "210", text: "Discard all Energy from this Pokémon." }
  ];
  public set: string = "MEG";
  public name: string = "Clawitzer";
  public fullName: string = "Clawitzer MEG 141";
  public text: string = "Clawitzer";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
