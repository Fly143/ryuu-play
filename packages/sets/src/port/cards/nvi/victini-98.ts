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

export class Victini_98 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Victory Star", powerType: PowerType.ABILITY, text: "Once during your turn, after you flip any coins for an attack, you may ignore all effects of those coin flips and being flipping those coins again. You can't use more than 1 Victory Star Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Stored Power", cost: [], damage: "30", text: "Move all Energy attached to this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "NVI";
  public name: string = "Victini";
  public fullName: string = "Victini NVI 98";
  public text: string = "Victini";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "moveAllEnergyToBench");
    }
    return state;
  }
}
