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

export class AltariaGXSV77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swablu";
  public hp: number = 200;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bright Tone", cost: [], damage: "50", text: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon-GX and Pokémon-EX." },
      { name: "Sonic Edge", cost: [], damage: "110", text: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon." },
      { name: "Euphoria-GX", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Asleep. Heal all damage from all of your Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "HIF";
  public name: string = "Altaria-GX";
  public fullName: string = "Altaria-GX HIF SV77";
  public text: string = "Altaria-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
