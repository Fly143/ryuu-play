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

export class Bastiodon_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shieldon";
  public hp: number = 130;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Metal Trait", powerType: PowerType.ABILITY, text: "As long as Bastiodon has a Pokémon Tool attached to it, remove 1 damage counter from Bastiodon between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Iron Defense", cost: [], damage: "30", text: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Bastiodon during your opponent's next turn." },
      { name: "Iron Tackle", cost: [], damage: "80", text: "Bastiodon does 30 damage to itself." }
  ];
  public set: string = "PL";
  public name: string = "Bastiodon";
  public fullName: string = "Bastiodon PL 20";
  public text: string = "Bastiodon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
