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

export class MachampGX_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Machoke";
  public hp: number = 250;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cross-Cut", cost: [], damage: "60+", text: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 60 more damage." },
      { name: "Bedrock Breaker", cost: [], damage: "130", text: "Discard any Stadium card in play." },
      { name: "Muscle Punch-GX", cost: [], damage: "180", text: "This attack's damage isn't affected by Resistance. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "BUS";
  public name: string = "Machamp-GX";
  public fullName: string = "Machamp-GX BUS 64";
  public text: string = "Machamp-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "discardStadium");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
