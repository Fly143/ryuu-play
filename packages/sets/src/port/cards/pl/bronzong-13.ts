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

export class Bronzong_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bronzor";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cycler", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may choose a card from your hand and put it on top of your deck. Then, search your deck for up to 2 basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward. This power can't be used if Bronzong is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Strange Spin", cost: [], damage: "20+", text: "If you have the same number of cards in your hand as your opponent, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Confused." },
      { name: "Heavy Potential", cost: [], damage: "", text: "Put a number of damage counters on each of your opponent's Pokémon equal to the number of Colorless Energy in that Pokémon's Retreat Cost (after applying effects to the Retreat Cost)." }
  ];
  public set: string = "PL";
  public name: string = "Bronzong";
  public fullName: string = "Bronzong PL 13";
  public text: string = "Bronzong";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
