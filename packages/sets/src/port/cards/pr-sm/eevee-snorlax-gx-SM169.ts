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

export class EeveeSnorlaxGXSM169 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 270;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cheer Up", cost: [], damage: "", text: "Attach an Energy card from your hand to 1 of your Pokémon." },
      { name: "Dump Truck Press", cost: [], damage: "120+", text: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 120 more damage." },
      { name: "Megaton Friends-GX", cost: [], damage: "210", text: "If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), draw cards until you have 10 cards in your hand. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "PR-SM";
  public name: string = "Eevee & Snorlax-GX";
  public fullName: string = "Eevee & Snorlax-GX PR-SM SM169";
  public text: string = "Eevee & Snorlax-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "drawUntilHand:10");
    }
    return state;
  }
}
