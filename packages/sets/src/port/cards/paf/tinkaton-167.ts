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

export class Tinkaton_167 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tinkatuff";
  public hp: number = 140;
    public height?: number = 2.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gather Materials", powerType: PowerType.ABILITY, text: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 3 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Special Hammer", cost: [], damage: "90+", text: "If this Pokémon has any Special Energy attached, this attack does 90 more damage." }
  ];
  public set: string = "PAF";
  public name: string = "Tinkaton";
  public fullName: string = "Tinkaton PAF 167";
  public text: string = "Tinkaton";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 3);
    }
    return state;
  }
}
