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

export class PorygonZDP35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Porygon2";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Install", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), move a Technical Machine card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Porygon-Z is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Learning", cost: [], damage: "", text: "Search your deck for a Pokémon LV.X that levels up from 1 of your Pokémon, and put it onto that Pokémon. (This counts as leveling up that Pokémon.) Shuffle your deck afterward." },
      { name: "Overload", cost: [], damage: "40+", text: "Does 40 damage plus 20 more damage for each Technical Machine card attached to Porygon-Z." }
  ];
  public set: string = "PR-DPP";
  public name: string = "Porygon-Z";
  public fullName: string = "Porygon-Z PR-DPP DP35";
  public text: string = "Porygon-Z";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
