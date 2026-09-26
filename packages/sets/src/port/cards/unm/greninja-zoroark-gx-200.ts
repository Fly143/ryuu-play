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

export class GreninjaZoroarkGX_200 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 250;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dark Pulse", cost: [], damage: "30+", text: "This attack does 30 more damage times the amount of Darkness Energy attached to all of your Pokémon." },
      { name: "Dark Union-GX", cost: [], damage: "", text: "Put 2 in any combination of Darkness Pokémon-GX and Darkness Pokémon-EX from your discard pile onto your Bench. If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), attach 2 Energy cards from your discard pile to each Pokémon that you put onto your Bench in this way. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UNM";
  public name: string = "Greninja & Zoroark-GX";
  public fullName: string = "Greninja & Zoroark-GX UNM 200";
  public text: string = "Greninja & Zoroark-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
