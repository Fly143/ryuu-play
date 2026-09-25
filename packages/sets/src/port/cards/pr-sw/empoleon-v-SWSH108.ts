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

export class EmpoleonVSWSH108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Emperor's Eyes", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, your opponent's Basic Pokémon in play have no Abilities, except for Pokémon with a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Swirling Slice", cost: [], damage: "130", text: "Move an Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Empoleon V";
  public fullName: string = "Empoleon V PR-SW SWSH108";
  public text: string = "Empoleon V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    return state;
  }
}
