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

export class Beedrill_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kakuna";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flutter Wings", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for a Grass Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Beedrill is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Needle Shock", cost: [], damage: "30", text: "The Defending Pokémon is now Paralyzed and Poisoned. Ignore this effect if any of your Pokémon used Needle Shock during your last turn." }
  ];
  public set: string = "RR";
  public name: string = "Beedrill";
  public fullName: string = "Beedrill RR 15";
  public text: string = "Beedrill";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
