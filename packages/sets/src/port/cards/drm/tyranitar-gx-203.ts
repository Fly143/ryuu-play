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

export class TyranitarGX_203 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pupitar";
  public hp: number = 250;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lost Out", powerType: PowerType.ABILITY, text: "If your opponent's Pokémon is Knocked Out by damage from this Pokémon's attacks, put that Pokémon and all cards attached to it in the Lost Zone instead of the discard pile.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dusty Ruckus", cost: [], damage: "130", text: "This attack does 30 damage to each of your opponent's Benched Basic Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Lay the Smackdown-GX", cost: [], damage: "220", text: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "DRM";
  public name: string = "Tyranitar-GX";
  public fullName: string = "Tyranitar-GX DRM 203";
  public text: string = "Tyranitar-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
