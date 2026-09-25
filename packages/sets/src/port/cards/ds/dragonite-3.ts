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

export class Dragonite_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dragonair";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Delta Charge", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon. This power can't be used if Dragonite is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Agility", cost: [], damage: "30", text: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Dragonite during your opponent's next turn." },
      { name: "Heavy Impact", cost: [], damage: "70", text: "" }
  ];
  public set: string = "DS";
  public name: string = "Dragonite δ";
  public fullName: string = "Dragonite δ DS 3";
  public text: string = "Dragonite δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromDiscard");
    }
    return state;
  }
}
