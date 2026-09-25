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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AlolanMarowakGXSM187 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cubone";
  public hp: number = 200;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cursed Body", powerType: PowerType.ABILITY, text: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fiery Bone", cost: [], damage: "90", text: "Your opponent's Active Pokémon is now Burned." },
      { name: "Lost Boomerang-GX", cost: [], damage: "", text: "This attack does 50 damage to 2 of your opponent's Pokémon. This damage isn't affected by Weakness or Resistance. If a Pokémon is Knocked Out by this damage, put that Pokémon and all cards attached to it in the Lost Zone instead of the discard pile. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "PR-SM";
  public name: string = "Alolan Marowak-GX";
  public fullName: string = "Alolan Marowak-GX PR-SM SM187";
  public text: string = "Alolan Marowak-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "roughSkin");
    }
    return state;
  }
}
