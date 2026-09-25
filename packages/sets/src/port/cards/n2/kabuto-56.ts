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

export class Kabuto_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mysterious Fossil";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Revive Friends", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a card named Kabuto and put it on your Bench. Shuffle your deck afterward. Treat the new Kabuto as a Basic Pokémon. This power can't be used if Kabuto is Asleep, Confused, or Paralyzed (or if your Bench is full).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Work Together", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage for each Omanyte, Omastar, Kabuto, and Kabutops on your Bench." }
  ];
  public set: string = "N2";
  public name: string = "Kabuto";
  public fullName: string = "Kabuto N2 56";
  public text: string = "Kabuto";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
