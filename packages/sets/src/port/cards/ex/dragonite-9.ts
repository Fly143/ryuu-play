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

export class Dragonite_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dragonair";
  public hp: number = 100;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tailwind", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Dragonite is on your Bench, you may reduce your Active Pokémon's Retreat Cost to 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragon Tail", cost: [], damage: "40×", text: "Flip 2 coins. This attack does 40 damage times the number of heads." }
  ];
  public set: string = "EX";
  public name: string = "Dragonite";
  public fullName: string = "Dragonite EX 9";
  public text: string = "Dragonite";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 40);
    }
    return state;
  }
}
