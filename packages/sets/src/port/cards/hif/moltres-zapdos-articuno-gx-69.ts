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

export class MoltresZapdosArticunoGX_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 300;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Trinity Burn", cost: [], damage: "210", text: "" },
      { name: "Sky Legends-GX", cost: [], damage: "", text: "Shuffle this Pokémon and all cards attached to it into your deck. If this Pokémon has at least 1 extra Fire, Water, and Lightning Energy attached to it (in addition to this attack's cost), this attack does 110 damage to 3 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "HIF";
  public name: string = "Moltres & Zapdos & Articuno-GX";
  public fullName: string = "Moltres & Zapdos & Articuno-GX HIF 69";
  public text: string = "Moltres & Zapdos & Articuno-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
