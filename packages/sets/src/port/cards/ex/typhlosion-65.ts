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

export class Typhlosion_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Quilava";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Heat Up", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may count the total number of Energy cards attached to all of your Pokémon and all of your opponent's Pokémon. If your opponent has more total Energy cards attached, you may search your deck for 1 Fire Energy card and attach it to 1 of your Benched Pokémon, if any. Shuffle your deck afterward. This power can't be used if Typhlosion is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Super Singe", cost: [], damage: "50", text: "Flip a coin. If heads, the Defending Pokémon is now Burned." }
  ];
  public set: string = "EX";
  public name: string = "Typhlosion";
  public fullName: string = "Typhlosion EX 65";
  public text: string = "Typhlosion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchEnergyToSelf */ state;
    }
    return state;
  }
}
