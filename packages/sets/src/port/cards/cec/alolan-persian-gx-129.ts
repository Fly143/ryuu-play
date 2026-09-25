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

export class AlolanPersianGX_129 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Meowth";
  public hp: number = 200;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Smug Face", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's TAG TEAM Pokémon and Ultra Beasts, and by your opponent's Pokémon that have any Special Energy attached to them.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Claw Slash", cost: [], damage: "120", text: "" },
      { name: "Stalking Claws-GX", cost: [], damage: "", text: "This attack does 120 damage to 1 of your opponent's Pokémon. This damage isn't affected by Weakness, Resistance, or any other effects on that Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Alolan Persian-GX";
  public fullName: string = "Alolan Persian-GX CEC 129";
  public text: string = "Alolan Persian-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "preventEffectsSelf");
    }
    return state;
  }
}
