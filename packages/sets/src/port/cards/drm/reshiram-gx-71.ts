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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ReshiramGX_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 3.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flame Charge", cost: [], damage: "", text: "Search your deck for up to 2 Fire Energy cards and attach them to this Pokémon. Then, shuffle your deck." },
      { name: "Scorching Column", cost: [], damage: "110", text: "Your opponent's Active Pokémon is now Burned." },
      { name: "Vermilion-GX", cost: [], damage: "180", text: "You may attach up to 5 Fire Energy cards from your hand to your Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "DRM";
  public name: string = "Reshiram-GX";
  public fullName: string = "Reshiram-GX DRM 71";
  public text: string = "Reshiram-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
