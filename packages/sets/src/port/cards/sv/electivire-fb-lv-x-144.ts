import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class ElectivireFBLVX_144 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Electivire FB";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Recycle", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may use this power. If you do, your turn ends. Search your discard pile for up to 3 Energy cards and attach them to your Pokémon in any way you like. This power can't be used if Electivire FB is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Powerful Spark", cost: [], damage: "30+", text: "This attack does 30 damage plus 10 more damage for each Energy attached to all of your Pokémon." }
  ];
  public set: string = "SV";
  public name: string = "Electivire FB LV.X";
  public fullName: string = "Electivire FB LV.X SV 144";
  public text: string = "Electivire FB LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* attachBasicFromDiscard */ state;
    }
    return state;
  }
}
