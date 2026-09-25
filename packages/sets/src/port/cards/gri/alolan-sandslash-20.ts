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

export class AlolanSandslash_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Sandshrew";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Slush Rush", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Smash Turn", cost: [], damage: "50", text: "Switch this Pokémon with 1 of your Benched Pokémon." }
  ];
  public set: string = "GRI";
  public name: string = "Alolan Sandslash";
  public fullName: string = "Alolan Sandslash GRI 20";
  public text: string = "Alolan Sandslash";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
