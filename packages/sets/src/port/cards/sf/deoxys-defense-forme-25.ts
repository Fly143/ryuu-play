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

export class DeoxysDefenseForme_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Form Change", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for any Deoxys and switch it with Deoxys Defense Forme. (Any cards attached to Deoxys Defense Forme, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys Defense Forme on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic Defense", cost: [], damage: "40", text: "During your opponent's next turn, prevent all effects of an attack, and any damage done to Deoxys by attacks is reduced by 20 (after applying Weakness and Resistance)." }
  ];
  public set: string = "SF";
  public name: string = "Deoxys Defense Forme";
  public fullName: string = "Deoxys Defense Forme SF 25";
  public text: string = "Deoxys Defense Forme";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchAnyToHand:1 */ state;
    }
    return state;
  }
}
