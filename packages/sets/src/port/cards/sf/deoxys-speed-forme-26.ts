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

export class DeoxysSpeedForme_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Form Change", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for any Deoxys and switch it with Deoxys Speed Forme. (Any cards attached to Deoxys Speed Forme, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys Speed Forme on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Speed Shot", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon." }
  ];
  public set: string = "SF";
  public name: string = "Deoxys Speed Forme";
  public fullName: string = "Deoxys Speed Forme SF 26";
  public text: string = "Deoxys Speed Forme";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchAnyToHand:1 */ state;
    }
    return state;
  }
}
