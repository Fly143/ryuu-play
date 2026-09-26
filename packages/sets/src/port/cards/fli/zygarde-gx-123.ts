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

export class ZygardeGX_123 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cell Connector", cost: [], damage: "50", text: "Attach 2 Fighting Energy cards from your discard pile to this Pokémon." },
      { name: "Land's Wrath", cost: [], damage: "130", text: "" },
      { name: "Verdict-GX", cost: [], damage: "150", text: "Prevent all damage done to this Pokémon by attacks from Pokémon-GX and Pokémon-EX during your opponent's next turn. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "FLI";
  public name: string = "Zygarde-GX";
  public fullName: string = "Zygarde-GX FLI 123";
  public text: string = "Zygarde-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.attachBasicFromDiscard(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.attachBasicFromDiscard(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
