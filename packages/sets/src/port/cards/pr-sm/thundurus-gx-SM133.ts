import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class ThundurusGXSM133 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Charge", cost: [], damage: "", text: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck." },
      { name: "Electric Ball", cost: [], damage: "140", text: "" },
      { name: "Thundering Hurricane-GX", cost: [], damage: "100×", text: "Flip 4 coins. This attack does 100 damage for each heads. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "PR-SM";
  public name: string = "Thundurus-GX";
  public fullName: string = "Thundurus-GX PR-SM SM133";
  public text: string = "Thundurus-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 100);
    }
    return state;
  }
}
