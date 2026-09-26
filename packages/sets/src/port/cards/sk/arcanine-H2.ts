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

export class ArcanineH22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Growlithe";
  public hp: number = 80;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Recharge", powerType: PowerType.ABILITY, text: "When you play Arcanine from your hand to evolve your Active Pokémon, you may flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to Arcanine.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shake", cost: [], damage: "10", text: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any." },
      { name: "White Flames", cost: [], damage: "70", text: "Discard all Fire Energy cards attached to Arcanine." }
  ];
  public set: string = "SK";
  public name: string = "Arcanine";
  public fullName: string = "Arcanine SK H2";
  public text: string = "Arcanine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
