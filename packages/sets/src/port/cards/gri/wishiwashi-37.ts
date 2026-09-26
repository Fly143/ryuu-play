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

export class Wishiwashi_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Schooling", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may switch this Pokémon with a Wishiwashi-GX in your hand. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sharpshooting", cost: [], damage: "", text: "This attack does 10 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "GRI";
  public name: string = "Wishiwashi";
  public fullName: string = "Wishiwashi GRI 37";
  public text: string = "Wishiwashi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
