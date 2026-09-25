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

export class TealMaskOgerponEx_190 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Teal Dance", powerType: PowerType.ABILITY, text: "Once during your turn, you may attach a Basic Grass Energy card from your hand to this Pokémon. If you attached Energy to a Pokémon in this way, draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Myriad Leaf Shower", cost: [], damage: "30+", text: "This attack does 30 more damage for each Energy attached to both Active Pokémon." }
  ];
  public set: string = "TWM";
  public name: string = "Teal Mask Ogerpon ex";
  public fullName: string = "Teal Mask Ogerpon ex TWM 190";
  public text: string = "Teal Mask Ogerpon ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* bonusPerEnergyBoth:30 */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
