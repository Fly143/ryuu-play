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

export class UltraNecrozmaGX_78 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Photon Geyser", cost: [], damage: "20+", text: "Discard all basic Psychic Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way." },
      { name: "Sky-Scorching Light-GX", cost: [], damage: "", text: "You can use this attack only if the total of both players' remaining Prize cards is 6 or less. Put 6 damage counters on each of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "DRM";
  public name: string = "Ultra Necrozma-GX";
  public fullName: string = "Ultra Necrozma-GX DRM 78";
  public text: string = "Ultra Necrozma-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersEachOpponent(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
