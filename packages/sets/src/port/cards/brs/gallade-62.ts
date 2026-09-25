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

export class Gallade_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kirlia";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Buddy Catch", powerType: PowerType.ABILITY, text: "Once during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Swirling Slice", cost: [], damage: "160", text: "Move an Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "BRS";
  public name: string = "Gallade";
  public fullName: string = "Gallade BRS 62";
  public text: string = "Gallade";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
