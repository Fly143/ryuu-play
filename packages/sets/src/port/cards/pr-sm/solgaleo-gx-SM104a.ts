import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  BetweenTurnsEffect,
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

export class SolgaleoGXSM104a extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cosmoem";
  public hp: number = 250;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shining Mane", powerType: PowerType.ABILITY, text: "Your Pokémon in play have no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Turbo Strike", cost: [], damage: "120", text: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon." },
      { name: "Prominence-GX", cost: [], damage: "", text: "Heal all damage from all of your Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "PR-SM";
  public name: string = "Solgaleo-GX";
  public fullName: string = "Solgaleo-GX PR-SM SM104a";
  public text: string = "Solgaleo-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noWeakness");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noWeakness");
    }
    return state;
  }
}
