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

export class SnowCloudCastform_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Temperamental Weather", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Sunny Castform and switch it with Snow-cloud Castform. (Any cards attached to Snow-cloud Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Snow-cloud Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flurries", cost: [], damage: "", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep." },
      { name: "White Snow", cost: [], damage: "50+", text: "If Magnetic Storm is in play, this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "HL";
  public name: string = "Snow-cloud Castform";
  public fullName: string = "Snow-cloud Castform HL 25";
  public text: string = "Snow-cloud Castform";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
