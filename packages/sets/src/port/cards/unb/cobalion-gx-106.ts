import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class CobalionGX_106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Metal Symbol", powerType: PowerType.ABILITY, text: "Each of your Pokémon that has any Metal Energy attached to it can't be affected by any Special Conditions. Remove any Special Conditions affecting those Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dueling Saber", cost: [], damage: "50+", text: "If there is any Stadium card in play, this attack does 60 more damage." },
      { name: "Iron Rule-GX", cost: [], damage: "", text: "During your opponent's next turn, their Pokémon can't attack. (This includes Pokémon that come into play on that turn.) (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UNB";
  public name: string = "Cobalion-GX";
  public fullName: string = "Cobalion-GX UNB 106";
  public text: string = "Cobalion-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
