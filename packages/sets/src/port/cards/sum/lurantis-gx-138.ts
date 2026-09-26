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

export class LurantisGX_138 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fomantis";
  public hp: number = 210;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flower Supply", cost: [], damage: "40", text: "Attach 2 basic Energy cards from your discard pile to your Pokémon in any way you like." },
      { name: "Solar Blade", cost: [], damage: "120", text: "Heal 30 damage from this Pokémon." },
      { name: "Chloroscythe-GX", cost: [], damage: "50×", text: "This attack does 50 damage times the amount of Grass Energy attached to this Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "SUM";
  public name: string = "Lurantis-GX";
  public fullName: string = "Lurantis-GX SUM 138";
  public text: string = "Lurantis-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
