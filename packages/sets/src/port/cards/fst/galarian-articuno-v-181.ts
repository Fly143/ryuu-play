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

export class GalarianArticunoV_181 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Reconstitute", powerType: PowerType.ABILITY, text: "You must discard 2 cards from your hand in order to use this Ability. Once during your turn, you may draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psyray", cost: [], damage: "110", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "FST";
  public name: string = "Galarian Articuno V";
  public fullName: string = "Galarian Articuno V FST 181";
  public text: string = "Galarian Articuno V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
