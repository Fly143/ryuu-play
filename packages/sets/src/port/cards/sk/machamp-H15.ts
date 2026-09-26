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

export class MachampH15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Machoke";
  public hp: number = 120;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Immunity", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's attacks done to Machamp.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Drag Off", cost: [], damage: "20", text: "Before doing damage, if your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon. If your opponent has no Benched Pokémon, ignore this effect." },
      { name: "Hurricane Punch", cost: [], damage: "30×", text: "Flip 4 coins. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "SK";
  public name: string = "Machamp";
  public fullName: string = "Machamp SK H15";
  public text: string = "Machamp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 30);
    }
    return state;
  }
}
