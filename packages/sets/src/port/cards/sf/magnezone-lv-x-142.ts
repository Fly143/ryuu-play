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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MagnezoneLVX_142 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magnezone";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Electric Trans", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may move a Lightning or Metal Energy attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Magnezone is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cyber Shock", cost: [], damage: "80", text: "Discard a Lightning Energy and a Metal Energy attached to Magnezone. The Defending Pokémon is now Paralyzed." }
  ];
  public set: string = "SF";
  public name: string = "Magnezone LV.X";
  public fullName: string = "Magnezone LV.X SF 142";
  public text: string = "Magnezone LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect as any);
    }
    return state;
  }
}
