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

export class FearowXY57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spearow";
  public hp: number = 90;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Δ Evolution", powerType: PowerType.ABILITY, text: "You may play this card from your hand to evolve a Pokémon during your first turn or the turn you play that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Repeating Drill", cost: [], damage: "20×", text: "Flip 5 coins. This attack does 20 damage times the number of heads." },
      { name: "Nosedive", cost: [], damage: "80", text: "This Pokémon does 20 damage to itself." }
  ];
  public set: string = "PR-XY";
  public name: string = "Fearow";
  public fullName: string = "Fearow PR-XY XY57";
  public text: string = "Fearow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 5, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "earlyEvolution");
    }
    return state;
  }
}
