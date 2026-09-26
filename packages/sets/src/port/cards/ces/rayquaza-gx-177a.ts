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

export class RayquazaGX_177a extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stormy Winds", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard the top 3 cards of your deck. If you do, attach a basic Energy card from your discard pile to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragon Break", cost: [], damage: "30×", text: "This attack does 30 damage times the amount of basic Grass and basic Lightning Energy attached to your Pokémon." },
      { name: "Tempest-GX", cost: [], damage: "", text: "Discard your hand and draw 10 cards. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CES";
  public name: string = "Rayquaza-GX";
  public fullName: string = "Rayquaza-GX CES 177a";
  public text: string = "Rayquaza-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
