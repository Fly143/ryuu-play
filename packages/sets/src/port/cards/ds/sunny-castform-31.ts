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

export class SunnyCastform_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Temperamental Weather", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Snow-cloud Castform and switch it with Sunny Castform. (Any cards attached to Sunny Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Sunny Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Holon Search", cost: [], damage: "", text: "Search your deck for a Holon Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward." }
  ];
  public set: string = "DS";
  public name: string = "Sunny Castform";
  public fullName: string = "Sunny Castform DS 31";
  public text: string = "Sunny Castform";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
