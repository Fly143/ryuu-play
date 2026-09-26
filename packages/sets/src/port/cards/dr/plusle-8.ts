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

export class Plusle_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Chain of Events", powerType: PowerType.ABILITY, text: "As long as Plusle is your Active Pokémon, whenever your other Active Pokémon, if any, attacks, you may use Cheer On after the first attack (you still need the necessary Energy to use Cheer On). You can't use Cheer On more than once in this way even if your other Active Pokémon has the Chain of Events Poké-Body.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cheer On", cost: [], damage: "", text: "Remove 1 damage counter from each of your Pokémon (including Plusle)." },
      { name: "Extra Circuit", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. If you choose Pokémon-ex, this attack does 40 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "DR";
  public name: string = "Plusle";
  public fullName: string = "Plusle DR 8";
  public text: string = "Plusle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
