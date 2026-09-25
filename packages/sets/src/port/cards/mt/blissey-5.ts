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

export class Blissey_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chansey";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Kind Egg", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Happiny is anywhere under Blissey, you may choose a number of cards in your hand up to the amount of Energy attached to Blissey and put those cards on top of your deck. Shuffle your deck afterward. Then, draw that many cards. This power can't be used if Blissey is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Happy Chance", cost: [], damage: "20+", text: "Does 20 damage plus 10 for each Energy attached to Blissey. Before doing damage, you may search your discard pile for a basic Energy card and attach it to Blissey." }
  ];
  public set: string = "MT";
  public name: string = "Blissey";
  public fullName: string = "Blissey MT 5";
  public text: string = "Blissey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
